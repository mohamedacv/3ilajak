import { Input } from "@/components/ui/input";
import AddDoctor from "@/features/doctors/components/AddDoctor";
import CardsDoctors from "@/features/doctors/components/CardsDoctors";
import {  Search } from "lucide-react";

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

        <AddDoctor />
      </div>

      <CardsDoctors />
    </div>
  );
}

export default page;
