'use client'

import * as React from "react";
import {ResizableTemplate} from "@/components/resizeable-template";
import {adminNavigation} from "@/config/navigation"
const defaultLayout = [20,80]
const defaultCollapsed = false;

export default function AdminLayout({children}:{children:React.ReactNode}) {
    return (
        <>
            <div className="hidden flex-col md:flex min-h-screen">
                <ResizableTemplate
                    navCollapsedSize={4}
                    defaultLayout={defaultLayout}
                    defaultCollapsed={defaultCollapsed}
                    navigation={adminNavigation}
                >
                    {children}
                </ResizableTemplate>

            </div>
        </>
    )
}