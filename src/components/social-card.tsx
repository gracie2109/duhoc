'use client'

import {social} from "@/config/constant";
import {Icons} from "@/components/icons";
import {ChevronLeftIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import { Switch } from "@/components/ui/switch"

export function SocialCard () {

    return (
        <div className="grid grid-cols-3 gap-3">

            {social.map((i) => {
                const Icon = i.icon ? Icons[i.icon] as any : ChevronLeftIcon
                return (
                    <div  key={i.id} className="rounded-md border p-5 flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                {i.name}
                                <Icon className="mr-2 h-4 w-4" aria-hidden="true"/>
                            </div>
                            <Switch />
                    </div>
                )
            })}

        </div>
    )
}