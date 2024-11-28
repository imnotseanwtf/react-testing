import { columns } from "@/Components/course/columns";
import { DataTable } from "@/Components/course/data-table";
import { SuperAdmin } from "@/Components/Role";
import { Card, CardHeader } from "@/Components/ui/card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Course } from "@/types/course";
import { usePage } from "@inertiajs/react";

interface ExtendedPageProps extends PageProps {
    courses: Course[];
}

export default function Dashboard({ auth }: ExtendedPageProps) {
    const { courses } = usePage<ExtendedPageProps>().props;

    return (
        <AuthenticatedLayout user={auth.user}>
            <SuperAdmin>
                <div className="container w-full">
                    <Card className="p-5 mt-2">
                        <CardHeader>Courses</CardHeader>
                        <hr />
                        <DataTable columns={columns} data={courses} />
                    </Card>
                </div>
            </SuperAdmin>
        </AuthenticatedLayout>
    );
}
