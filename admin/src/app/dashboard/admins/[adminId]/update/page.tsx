import PermissionAdmins from "@/features/admins/components/add/PermissionAdmins";
import FormAdmins from "@/features/admins/components/FormAdmins";
import SystemAdmins from "../../../../../features/admins/components/add/SystemAdmins";
import { getAdmin } from "@/features/admins/api/getAdmin";

interface PageProps {
  params: Promise<{
    adminId: string;
  }>;
}

async function Page({ params }: PageProps) {
  const { adminId } = await params;

  const id = Number(adminId);

  const admin = await getAdmin(id);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormAdmins mode="update" adminId={id} admin={admin} />
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <PermissionAdmins />

          <SystemAdmins />
        </div>
      </div>
    </div>
  );
}

export default Page;
