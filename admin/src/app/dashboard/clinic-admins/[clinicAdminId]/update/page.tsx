import InfoClinicAdmins from "@/features/clinic-admins/components/add/InfoClinicAdmins";
import FormClinicAdmins from "@/features/clinic-admins/components/add/FormClinicAdmins";
import { getClinicAdmin } from "@/features/clinic-admins/api/getClinicAdmin";
import { getAllClinics } from "@/features/clinics/api/getAllClinics";

interface PageProps {
  params: Promise<{
    clinicAdminId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { clinicAdminId } = await params;

  const id = Number(clinicAdminId);

  const clinicAdmin = await getClinicAdmin(id);

  const response = await getAllClinics();

  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="col-span-8 flex flex-col gap-6">
        <FormClinicAdmins
          mode="update"
          clinicAdminId={id}
          clinicAdmin={clinicAdmin}
          clinics={response.data}
        />
      </div>
      <div className="col-span-4 flex flex-col gap-6">
        <InfoClinicAdmins />
      </div>
    </div>
  );
}

export default page;
