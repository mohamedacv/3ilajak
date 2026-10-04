import { getAllClinics } from "@/features/clinics/api/getAllClinics";
import AddDoctorPage from "@/features/doctors/components/add/AddDoctorPage";
import { getAllSpecializations } from "@/features/specializations/api/getAllSpecializations";

export default async function Page() {
  const response = await getAllClinics({
    name: "",
  });

  const res = await getAllSpecializations();

  return <AddDoctorPage clinics={response.data} specializations={res.data.data}/>;
}

