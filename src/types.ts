import {LucideIcon} from "lucide-react";
import {Icons} from "@/components/icons";


export interface Navigation {
    title: string
    label?: string
    icon: LucideIcon
    variant: "default" | "ghost",
    url: string
}

export interface FileWithPath extends File {
    readonly path?: string;
}


export type FileWithPreview = FileWithPath & {
    preview: string,
    url?:string
}

export type Images ={
   docId:string,
    name:string,
    url:string,
    id:string
}

export interface Social {
    name: string
    url?: string
    icon?: keyof typeof Icons
    id:string
}