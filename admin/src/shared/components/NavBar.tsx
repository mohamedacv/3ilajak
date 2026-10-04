import { Input } from "@/components/ui/input";
import { BellDot, CircleQuestionMark, Search } from "@/assets/icon/icons";
import AdminProfile from "./atoms/AdminProfile";

export default function NavBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 border-gray-300">
      <div className="relative w-full max-w-md">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <Input
          placeholder="Search medical records, doctors, or clinics..."
          className="pl-10 bg-gray-50 border-gray-200 focus-visible:ring-1"
        />
      </div>

      <div className="ml-6 flex items-center gap-6">
        <div className="flex items-center gap-3 border-r-2 border-r-gray-300">
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-200">
            <CircleQuestionMark className="h-5 w-5 text-gray-600" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-200">
            <BellDot className="h-5 w-5 text-gray-600" />
          </button>
        </div>

       <AdminProfile />
      </div>
    </header>
  );
}
