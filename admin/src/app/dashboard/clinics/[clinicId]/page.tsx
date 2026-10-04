import { getClinic } from "@/features/clinics/api/getClinic";
import CardClinic from "@/features/clinics/components/details/CardClinic";
import StatisticsDetailsClinic from "@/features/clinics/components/details/StatisticsDetailsClinic";

interface PageProps {
  params: Promise<{
    clinicId: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { clinicId } = await params;

  const clinic = await getClinic(Number(clinicId));

  return (
    <div className="flex flex-col gap-8">
      <CardClinic clinic={clinic} />
      <StatisticsDetailsClinic clinic={clinic} />
    </div>
  );
}