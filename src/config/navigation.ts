import {Settings, Archive,Images} from "lucide-react";
import {Navigation} from "@/types";

export const adminNavigation:Navigation[] =
    [
        {
            title: "Setting Page",
            icon: Settings,
            variant: "ghost",
            url:"/admin"
        },
        {
            title: "Images",
            icon: Images,
            variant: "ghost",
            url:"/admin/images"
        },
        {
            title: "Social",
            icon: Images,
            variant: "ghost",
            url:"/admin/social"
        },
    ]

