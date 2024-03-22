"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {useForm, UseFormReturn} from "react-hook-form"
import {IPages,pageInit,pageSchema} from "@/lib/validation";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {generateReactHelpers, UploadButton} from "@uploadthing/react";
import {OurFileRouter} from "@/app/api/uploadthing/core";
import {FileDialog} from "@/components/file-dialog";
import {FileWithPreview} from "@/types";
import React from "react";
import Image from "next/image";
import {MediumZoom} from "@/components/medium-zoom";
import {useMounted} from "@/hooks/use-mounted";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();
interface ISettingForms {
    form: UseFormReturn<Omit<IPages, 'logo' | 'favicon'>>,
    onSubmit:(value:Omit<IPages, 'logo' | 'favicon'>) => void,
    thumbnail: FileWithPreview[] | null,
    setThumbnail: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>,
    favicon: FileWithPreview[] | null,
    setFavicon: React.Dispatch<React.SetStateAction<FileWithPreview[] | null>>,
    isUploading:boolean,
    isPending:boolean
}
export function SettingForms ({   favicon,setFavicon,onSubmit,form,setThumbnail,thumbnail,isUploading,isPending }:ISettingForms) {
    const mount = useMounted()

    return (
        <React.Suspense fallback="Loadinh....">
            {mount ? (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tên trang web </FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mô tả</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us a little bit about yourself"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />




                            <div className="border rounded-sm p-2" >
                                <h3 className="font-semibold">Favicon</h3>
                                <div className="space-y-3 my-3">
                                    {favicon?.length ? (
                                        <div className="flex items-center gap-2">
                                            {favicon?.map((file, i) => (
                                                <MediumZoom key={i}>
                                                    <Image
                                                        src={file?.url ? file.url : file?.preview}
                                                        alt={file.name}
                                                        className="size-20 shrink-0 rounded-md object-cover object-center"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <></>
                                                </MediumZoom>
                                            ))}
                                        </div>
                                    ) : null}
                                    <React.Suspense fallback="Loading...">
                                        <FileDialog
                                            name="images"
                                            maxFiles={1}
                                            maxSize={1024 * 1024 * 2}
                                            files={favicon}
                                            setFiles={setFavicon}
                                            isUploading={isUploading}
                                            disabled={isPending}
                                        />
                                    </React.Suspense>
                                </div>
                            </div>
                            <div className="border rounded-sm p-2" >
                                <h3 className="font-semibold">Logo</h3>
                                <div className="space-y-3 my-3">
                                    {thumbnail?.length ? (
                                        <div className="flex items-center gap-2">
                                            {thumbnail?.map((file, i) => (
                                                <MediumZoom key={i}>
                                                    <Image
                                                        src={file?.url ? file.url : file?.preview}
                                                        alt={file.name}
                                                        className="size-20 shrink-0 rounded-md object-cover object-center"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <></>
                                                </MediumZoom>
                                            ))}
                                        </div>
                                    ) : null}
                                    <React.Suspense fallback="Loading...">
                                        <FileDialog
                                            name="images"
                                            maxFiles={1}
                                            maxSize={1024 * 1024 * 2}
                                            files={thumbnail}
                                            setFiles={setThumbnail}
                                            isUploading={isUploading}
                                            disabled={isPending}
                                        />
                                    </React.Suspense>
                                </div>
                            </div>



                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>

                </>
            ):(
                <>Server is running</>
            )}


        </React.Suspense>
    )
}