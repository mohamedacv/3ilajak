import { ReactNode } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import { Laptop } from "lucide-react";

interface Props {
  children: ReactNode;
}

export default function DashbordLayout({ children }: Props) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center lg:hidden">
        <div className="rounded-2xl border bg-white p-8 shadow-lg">
          <Laptop className="mx-auto mb-4 h-14 w-14 text-green-600" />

          <h1 className="mb-2 text-2xl font-bold text-gray-900">
            Desktop Only
          </h1>

          <p className="max-w-sm text-gray-600">
            This dashboard is currently optimized for desktop screens.
            Please open it on a laptop or desktop computer for the best
            experience.
          </p>
        </div>
      </div>

      <div className="hidden min-h-screen lg:flex">
        <SideBar />

        <div className="flex flex-1 flex-col overflow-hidden">
          <NavBar />

          <main className="flex-1 overflow-y-auto bg-gray-100/50 p-4 lg:p-8">
            {children}
            <div className="mb-5" />
          </main>
        </div>
      </div>
    </>
  );
}