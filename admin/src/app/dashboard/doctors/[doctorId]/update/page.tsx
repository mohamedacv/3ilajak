import { getAllClinics } from "@/features/clinics/api/getAllClinics";
import { getDoctor } from "@/features/doctors/api/getDoctor";
import AddDoctorPage from "@/features/doctors/components/add/AddDoctorPage";
import { getAllSpecializations } from "@/features/specializations/api/getAllSpecializations";


interface PageProps {
  params: Promise<{
    doctorId: string;
  }>;
}


export default async function Page({ params }: PageProps) {

  const { doctorId } = await params;

  const id = Number(doctorId);

  const doctor = await getDoctor(id);

  const response = await getAllClinics({
    name: "",
  });

  const res = await getAllSpecializations();

  return <AddDoctorPage clinics={response.data} specializations={res.data.data} doctorId={id} doctor={doctor}/>;
}
