import { getAllPatients } from "@/features/patients/api/getAllPatients";
import StatisticsPratients from "@/features/patients/components/StatisticsPratients";
import TablePatients from "@/features/patients/components/TablePatients";
import TopBar from "@/features/patients/components/TopBar";

interface PageProps {
  searchParams: Promise<{
    name?: string;
  }>;
}


async function page({ searchParams }: PageProps) {
    const { name } = await searchParams;
  
    const response = await getAllPatients({
      name,
    });
  
    const patients = response.data;
    
  return (
    <div className="flex flex-col gap-4">
      <StatisticsPratients patients={patients}/>

      <TopBar />

      <TablePatients patients={patients}/>

    </div>
  );
}

export default page;
