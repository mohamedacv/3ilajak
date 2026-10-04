import { Button } from "@/components/ui/button";
import { getAllDoctors } from "@/features/doctors/api/getAllDoctors";
import StatisticsDoctors from "@/features/doctors/components/StatisticsDoctors";
import TableDoctors from "@/features/doctors/components/TableDoctors";
import TitlePage from "@/shared/components/atoms/TitlePage";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    name?: string;
  }>;
}

async function page({ searchParams }: PageProps) {
  const { name } = await searchParams;

  const response = await getAllDoctors({
    name,
  });

  const doctors = response.data;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Doctor Management"
          decs="Manage medical professionals across the 3ilajak enterprise network."
        />
        <Link href="/dashboard/doctors/add">
          <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center cursor-pointer">
            <CirclePlus className="w-5 h-5" />
            <span className="text-lg font-semibold"> Add Doctors</span>
          </Button>
        </Link>
      </div>

      <StatisticsDoctors doctors={doctors}/>

      <TableDoctors doctors={doctors}/>
    </div>
  );
}

export default page;
