import PageFormPatient from "@/features/patients/components/PageFormPatient";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";

function page() {

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <PageFormPatient />
    </div>
  );
}

export default page;
