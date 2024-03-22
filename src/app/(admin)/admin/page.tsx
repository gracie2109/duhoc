import {Shell} from "@/components/shells/shell";
import {PageHeader,PageHeaderHeading, PageHeaderDescription} from "@/components/page-header";
import {SettingPageShell} from "@/components/shells/setting-page-shell";
import * as React from "react"
export  default function AdminPage() {

    return (
        <Shell variant="default">
            <PageHeader separated>
                <PageHeaderHeading size="sm">Cài đặt trang web</PageHeaderHeading>
                <PageHeaderDescription size="sm">
                    Tên, mô tả,...
                </PageHeaderDescription>
            </PageHeader>
           <React.Suspense fallback="Loading...">
               <SettingPageShell />
           </React.Suspense>
        </Shell>
    )
}