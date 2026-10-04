import FormClinics from "@/features/clinics/components/add/FormClinics";
import Breadcrumb from "@/shared/components/atoms/Breadcrumb";

function page() {
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb />

      <FormClinics />
    </div>
  );
}

export default page;
