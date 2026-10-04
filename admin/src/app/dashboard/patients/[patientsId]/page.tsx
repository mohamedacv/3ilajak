import { getPatient } from "@/features/patients/api/getPatient";
import CardPatient from "@/features/patients/components/details/CardPatient";
import EmergencyPatient from "@/features/patients/components/details/EmergencyPatient";

interface PageProps {
  params: Promise<{
    patientsId: string;
  }>;
}

async function Page({ params }: PageProps) {

   const { patientsId } = await params;
  
    const patient = await getPatient(Number(patientsId));
  
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-9">
          <CardPatient patient={patient}/>
        </div>

        <div className="flex flex-col gap-6 xl:col-span-3">
          <EmergencyPatient patient={patient}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
