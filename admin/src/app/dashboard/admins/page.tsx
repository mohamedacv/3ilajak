import { Button } from "@/components/ui/button";
import { getAllAdmins } from "@/features/admins/api/getAllAdmins";
import AnalysisAdmins from "@/features/admins/components/AnalysisAdmins";
import TableAdmins from "@/features/admins/components/TableAdmins";
import TitlePage from "@/shared/components/atoms/TitlePage";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{
    name?: string;
  }>;
}

async function Page({ searchParams }: PageProps) {
  const { name } = await searchParams;

  const response = await getAllAdmins({
    name,
  });

  const admins = response.data.data;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <TitlePage
          title="Admins Management"
          decs="Oversee system-wide roles and clinic-specific administrative access."
        />

        <Link href="/dashboard/admins/add">
          <Button className="flex gap-1 bg-blue-800 text-white px-6 py-5 items-center cursor-pointer">
            <CirclePlus className="w-5 h-5" />

            <span className="text-lg font-semibold">
              Add Admins
            </span>
          </Button>
        </Link>
      </div>

      <AnalysisAdmins admins={admins} />

      <TableAdmins admins={admins} />
    </div>
  );
}

export default Page;