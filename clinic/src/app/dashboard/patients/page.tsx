import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TablePatients from "@/features/Patients/components/TablePatients";
import { Plus, Search } from "lucide-react";
import Link from "next/link";


function page() {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white shadow p-6 flex justify-between rounded-xl">
        <div className="relative w-100 ">
          <Search className="absolute top-2/5 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            placeholder="Search"
            className="pl-10  border-gray-200 rounded-2xl focus-visible:ring-1"
          />
        </div>

       <Link href="/dashboard/patients/add">
        <Button className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-6 py-5 items-center cursor-pointer">
          <Plus className="w-5 h-5" />
          <span className="text-lg font-semibold"> Add Patient</span>
        </Button>
       </Link>
      </div>

      <TablePatients />
    </div>
  );
}

export default page;
