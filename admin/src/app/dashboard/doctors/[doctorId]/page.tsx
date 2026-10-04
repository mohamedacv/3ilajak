import { getDoctor } from "@/features/doctors/api/getDoctor";
import CardDoctor from "@/features/doctors/components/details/CardDoctor";
import InfoDector from "@/features/doctors/components/details/InfoDector";

interface PageProps {
  params: Promise<{
    doctorId: string;
  }>;
}

async function page({ params }: PageProps) {
  const { doctorId } = await params;
  
    const doctor = await getDoctor(Number(doctorId));
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-5">
          <CardDoctor doctor={doctor}/>
        </div>
        <div className="flex flex-col gap-6 xl:col-span-2"></div>

        <div className="flex flex-col gap-6 xl:col-span-5">
            <InfoDector doctor={doctor}/>
        </div>
      </div>
    </div>
  );
}

export default page;
