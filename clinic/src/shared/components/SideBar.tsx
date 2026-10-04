"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menus } from "../data/sideBar";
import IconLogo from "./atoms/IconLogo";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-68 overflow-y-auto custom-scroll pt-3 pb-20 shadow">
      <div className="flex flex-col gap-8 px-4">
        <div className="flex items-center gap-3.5">
          <IconLogo />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-blue-700">
              MediPro Enterprise
            </h1>

            <span className="text-md font-semibold text-gray-500">
              City General Clinic
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <div>
            <ul className="flex flex-col gap-1">
              {menus.map((menu, index) => {
                const Icon = menu.icon;
                const isActive = pathname === menu.link;

                return (
                  <li key={index}>
                    <Link
                      href={menu.link}
                      className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                        isActive
                          ? "bg-blue-700 text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-blue-900"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isActive
                            ? "text-white"
                            : "opacity-80 transition group-hover:opacity-100"
                        }`}
                      />

                      <span className="font-medium tracking-wide">
                        {menu.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
