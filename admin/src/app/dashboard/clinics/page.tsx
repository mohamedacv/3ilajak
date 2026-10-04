import { Button } from "@/components/ui/button";
import { getAllClinics } from "@/features/clinics/api/getAllClinics";
import StatisticsClinics from "@/features/clinics/components/StatisticsClinics";
import TableClinics from "@/features/clinics/components/TableClinics";
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

  const response = await getAllClinics({
    name,
  });

  const clinic = response.data;
  

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Clinic Management"
          decs="Oversee health centers, assign administrative staff, and monitor doctor allocation across the network."
        />
        <Link href="/dashboard/clinics/add">
          <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center cursor-pointer">
            <CirclePlus className="w-5 h-5" />
            <span className="text-lg font-semibold"> Add Clinic</span>
          </Button>
        </Link>
      </div>

      <StatisticsClinics clinic={clinic} />

      <TableClinics clinic={clinic} />
    </div>
  );
}

export default page;
