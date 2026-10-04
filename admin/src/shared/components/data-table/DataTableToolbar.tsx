"use client";

import { ReactNode } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type DataTableToolbarProps = {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
};

export default function DataTableToolbar({
  searchValue = "",
  onSearchChange,
  searchPlaceholder = "Search...",
  leftSection,
  rightSection,
}: DataTableToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <div className="relative w-full md:w-80">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder={searchPlaceholder}
            className="pl-9"
          />
        </div>

        {leftSection}
      </div>

      <div className="flex items-center gap-2">
        {rightSection}
      </div>
    </div>
  );
}