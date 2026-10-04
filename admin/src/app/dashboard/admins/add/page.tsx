import PermissionAdmins from "@/features/admins/components/add/PermissionAdmins";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";
import SystemAdmins from "../../../../features/admins/components/add/SystemAdmins";
import FormAdmins from "@/features/admins/components/FormAdmins";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <div className="grid grid-cols-12 items-start gap-6">
        <div className="col-span-8 flex flex-col gap-6">
          <FormAdmins />
        </div>
        <div className="col-span-4 flex flex-col gap-6">
          <PermissionAdmins />

          <SystemAdmins />
        </div>
      </div>
    </div>
  );
}

export default page;
