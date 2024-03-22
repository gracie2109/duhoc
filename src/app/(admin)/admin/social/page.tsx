import {PageHeader, PageHeaderDescription, PageHeaderHeading} from "@/components/page-header";
import * as React from "react";
import {Shell} from "@/components/shells/shell";
import {SocialShell} from "@/components/shells/social-shell";

export default function SocialPage() {
    return (
        <>

            <Shell variant="default">
                <PageHeader separated>
                    <PageHeaderHeading size="sm">Mạng xã hội</PageHeaderHeading>
                    <PageHeaderDescription size="sm">
                        Tên, mô tả,...
                    </PageHeaderDescription>
                </PageHeader>
                <React.Suspense fallback="Loading...">
                    <SocialShell />
                </React.Suspense>
            </Shell>

        </>
    )
}