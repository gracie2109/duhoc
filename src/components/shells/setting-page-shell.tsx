'use client'

import React from "react";
import {FileWithPreview} from "@/types";
import {useForm} from "react-hook-form";
import {IPages, pageInit, Pages, pageSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {isArrayOfFile, setValuesOfForm} from "@/lib/utils";
import {db} from "@/config/firebase";
import {toast} from "react-hot-toast";
import {generateReactHelpers} from "@uploadthing/react";
import {OurFileRouter} from "@/app/api/uploadthing/core";
import {SettingForms} from "@/components/forms/setting-forms";
const { useUploadThing } = generateReactHelpers<OurFileRouter>();
import {collection, onSnapshot, query,addDoc} from "firebase/firestore";



export function SettingPageShell () {
    const [thumbnail, setThumbnail] = React.useState<FileWithPreview[] | null>(null)
    const [favicon, setFavicon] = React.useState<FileWithPreview[] | null>(null)
    const { isUploading, startUpload } = useUploadThing ("productImage")
    const [isPending, startTransition] = React.useTransition()
    const [data, setData] = React.useState<Pages | null>(null);

    React.useEffect(() => {
        const q = query(collection(db, "store"));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let fetchedMessages:Pages | null = null;
             QuerySnapshot.forEach((doc) => {
                const data={id:doc.id, ...doc.data()} as Pages
                fetchedMessages = data
            });
            setData(fetchedMessages)
        });
        return () => unsubscribe()
    }, []);

    console.log("data",data)


    const form = useForm<Omit<IPages, 'logo' | 'favicon'>>({
        resolver: zodResolver(pageSchema),
        defaultValues:pageInit,
    });


    React.useEffect(() => {
        if(data) {
            setValuesOfForm(data,form);
            setThumbnail(data.logo);
            setFavicon(data.favicon)
        }
    },[data])

    function onSubmit(data:Omit<IPages, 'logo' | 'favicon'>) {

        startTransition(async () => {
            try {
                const uploadThumbnailPromise = isArrayOfFile(thumbnail) ? startUpload(thumbnail) : Promise.resolve([]);
                const uploadFaviconPromise = isArrayOfFile(favicon) ? startUpload(favicon) : Promise.resolve([]);

                const [thumbnailRes, faviconRes] = await Promise.all([uploadThumbnailPromise, uploadFaviconPromise]);

                const formattedThumbnailImages = thumbnailRes?.map((image) => ({
                    id: image.key,
                    name: image.key.split("_")[1] ?? image.key,
                    url: image.url,
                })) ?? null;

                const formattedFaviconImages = faviconRes?.map((image) => ({
                    id: image.key,
                    name: image.key.split("_")[1] ?? image.key,
                    url: image.url,
                })) ?? null;


                if(formattedFaviconImages ||formattedThumbnailImages ) {
                    await addDoc(collection(db, "store"), {
                        ...data,
                        favicon:formattedFaviconImages,
                        logo:formattedThumbnailImages
                    })
                }

                toast.promise(
                    Promise.all([uploadThumbnailPromise, uploadFaviconPromise]),
                    {
                        loading: "Uploading images...",
                        success: "Product added successfully.",
                        error: "Error uploading images.",
                    }
                );

                form.reset();
                setFavicon(null);
                setThumbnail(null)
            } catch (err) {
                console.log("err",err)
            }
        })
    }

    return (
        <>
            <React.Suspense fallback="Loading...">
                <SettingForms form={form}
                              onSubmit={onSubmit}
                              thumbnail={thumbnail}
                              setThumbnail={setThumbnail}
                              setFavicon={setFavicon}
                              favicon={favicon}
                              isUploading={isUploading}
                              isPending={isPending}

                />
            </React.Suspense>
        </>
    )
}