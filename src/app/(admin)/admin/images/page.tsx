import {PageHeader, PageHeaderDescription, PageHeaderHeading} from "@/components/page-header";
import {Shell} from "@/components/shells/shell";
import {MediaShell} from "@/components/shells/media-shell";

export default function ImagesPage () {
    return (
        <>
            <Shell variant="default">
                <PageHeader separated>
                    <PageHeaderHeading size="sm">Media</PageHeaderHeading>
                    <PageHeaderDescription size="sm">
                        All media here
                    </PageHeaderDescription>
                </PageHeader>
                <MediaShell />
            </Shell>
        </>
    )
}