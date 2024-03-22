'use client'
import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {useMounted} from "@/hooks/use-mounted";
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {FileDialog} from "@/components/file-dialog";
import {FileWithPreview, Images} from "@/types";
import {generateReactHelpers} from "@uploadthing/react";
import {OurFileRouter} from "@/app/api/uploadthing/core";
import Image from "next/image";
import {ReloadIcon} from "@radix-ui/react-icons";
import {PlusCircle, UploadCloudIcon} from "lucide-react";
import {ControllerZoom, MediumZoom} from "@/components/medium-zoom"
import {toast} from "react-hot-toast";
import {db} from "@/config/firebase";
import {isArrayOfFile,cn} from "@/lib/utils";
import {addDoc, collection, onSnapshot, query} from "firebase/firestore";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTitle,
    DialogHeader
} from "@/components/ui/dialog"

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export function MediaShell () {
    const mount = useMounted();
    const [thumbnail, setThumbnail] = React.useState<FileWithPreview[] | null>(null)
    const { isUploading, startUpload } = useUploadThing ("productImage")
    const [isPending, startTransition] = React.useTransition()
    const [isZoomed, setIsZoomed] = React.useState(false);
    const [openSheet, setOpenSheet] = React.useState<boolean>(false);
    const [listImage, setListImage] = React.useState<Images[]>([])
    const [clickItem, setClickItem] = React.useState<Images[]>([])
    const [activeContact, setActiveContact] =  React.useState<Images | null>(null);




    const handleZoomChange = React.useCallback((shouldZoom:any) => {
        setIsZoomed(shouldZoom)
    }, [])


    React.useEffect(() => {
        const q = query(collection(db, "images"));
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let fetchedMessages:Images[] =[]
            QuerySnapshot.forEach((doc) => {
                const data={docId:doc.id, ...doc.data()} as Images
                fetchedMessages.push(data)
            });
             setListImage(fetchedMessages)
        });
        return () => unsubscribe()
    }, []);


    const uploadImage = () => {
            if (thumbnail) {
                if (isArrayOfFile(thumbnail)) {
                    toast.promise(
                        startUpload(thumbnail)
                            .then((res) => {
                                const formattedImages = res?.map((image) => ({
                                    id: image.key,
                                    name: image.key.split("_")[1] ?? image.key,
                                    url: image.url,
                                }))
                                return formattedImages ?? null
                            })
                            .then(async (images) => {
                                images &&  Promise.all(images.map((item) => {
                                    addDoc(collection(db, "images"), item)
                                }))
                            }),
                        {
                            loading: "Uploading images...",
                            success: () => {
                                setOpenSheet(false);
                                setThumbnail(null)
                               return  "Product added successfully."
                            },
                            error: (e:any) => {
                                console.log("e", e)
                                return "Error uploading images."
                            },
                        }
                    )
                }
            }

        }

    const handleClick = (item:Images) => {
        if(clickItem.length == 0) setClickItem([item]);
        else {
            if(clickItem.includes(item)){
                const newArr = clickItem.filter((i) => i.id !== item.id);
                setClickItem(newArr)
            }else{
                setClickItem([...clickItem, item])
            }
        }
    }
    console.log(activeContact)

    return (
        <>
            {mount  ? (
                <>
                    <div className="grid place-content-end">
                        <div className="flex gap-20 items-center">
                            <div>
                                {clickItem ? (
                                    <>  You has choose {clickItem.length} images</>
                                ) :null}
                            </div>
                            <Button variant="outline" onClick={() => setOpenSheet(true)}>
                                <PlusCircle className="w-4 h-4 mr-2"/> Upload
                            </Button>
                        </div>
                        <Sheet modal={false} open={openSheet} onOpenChange={(e) => {
                            if(!isZoomed && e) {
                                setOpenSheet(true)
                            }else {
                                setOpenSheet(false);
                                setThumbnail(null)
                            }
                        }}>
                            <SheetContent className="w-full h-[100vh]" side="bottom" >
                                <SheetHeader>
                                    <SheetTitle>Upload Images</SheetTitle>
                                    <div className="p-2" >
                                        <div className="space-y-10 my-3">
                                            <React.Suspense fallback="Loading...">
                                               <div className="flex gap-3 items-center">
                                                   <FileDialog
                                                       name="images"
                                                       maxFiles={100}
                                                       maxSize={1024 * 1024 * 2}
                                                       files={thumbnail}
                                                       setFiles={setThumbnail}
                                                       isUploading={isUploading}
                                                       disabled={isPending}
                                                   />
                                                   <Button disabled={!thumbnail} onClick={uploadImage}>
                                                       {isPending ? (
                                                           <>
                                                               <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                                               Please wait
                                                           </>
                                                       ): (
                                                           <>
                                                               <UploadCloudIcon className="mr-2 h-4 w-4" />
                                                               Submit
                                                           </>
                                                       )}
                                                   </Button>
                                               </div>
                                            </React.Suspense>

                                            {thumbnail?.length ? (
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    {thumbnail?.map((file, i) => (
                                                        <ControllerZoom key={i} isZoomed={isZoomed} handleZoomChange={handleZoomChange}>
                                                            <Image
                                                                    key={i}
                                                                    src={file?.url ? file.url : file?.preview}
                                                                    alt={file.name}
                                                                    className="size-20 shrink-0 rounded-md object-cover object-center"
                                                                    width={60}
                                                                    height={60}
                                                                />
                                                        </ControllerZoom>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>


                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>

                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 3, 900: 4}}
                    >
                        <Masonry gutter={"20px"}>
                            {listImage.map((i,j) => (
                                <div key={j}
                                     onClick={() => handleClick(i)}
                                     onContextMenu={(e) => {
                                         e.preventDefault(); // prevent the default behaviour when right clicked
                                         setActiveContact(i)
                                     }}
                                     className={cn('rounded-md border cursor-pointer',{ "border-orange-500 border-2":clickItem.includes(i)  })}>
                                        <Image key={j} src={i?.url} alt={i?.name}
                                               className="p-1 object-cover w-full h-full min-h-[60px]"
                                               width={200}
                                               height={200}
                                               loading="lazy"
                                               placeholder={ 'empty' }
                                        />
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>

                    {activeContact && (
                        <>
                            <Dialog open={!!activeContact}
                                    onOpenChange={(e) => {

                                            setActiveContact(null);
                                    }}

                            >
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Your image</DialogTitle>
                                    </DialogHeader>
                                        <ControllerZoom isZoomed={isZoomed} handleZoomChange={handleZoomChange} >
                                            <img src={activeContact.url} alt={activeContact.name}
                                                 className="w-full "

                                            />
                                        </ControllerZoom>
                                    <DialogFooter>

                                        <Button type="button" variant="link" onClick={() => setActiveContact(null)}>Cancel</Button>
                                        <Button type="button" variant="destructive"
                                            onClick={() => {
                                                toast('remove image')
                                                setActiveContact(null)
                                            }}
                                        >Delete</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        
                        </>
                    )}




                </>
            ): <>Loading</>}


        </>
    )
}