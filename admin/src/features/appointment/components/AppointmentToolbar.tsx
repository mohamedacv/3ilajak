"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { useQueryState, parseAsString } from "nuqs";

import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const placeholders = {
  patient: "Search by patient...",
  doctor: "Search by doctor...",
  clinic: "Search by clinic...",
} as const;

type SearchType = keyof typeof placeholders;

export default function AppointmentToolbar() {
  const [searchType, setSearchType] = useQueryState(
    "type",
    parseAsString.withDefault("patient")
  );

  const [name, setName] = useQueryState(
    "name",
    parseAsString.withDefault("")
  );

  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-wrap items-center gap-3 bg-white shadow p-6 rounded-xl">
      <div className="relative flex-1 min-w-[260px]">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={
            placeholders[(searchType as SearchType) ?? "patient"]
          }
          className="
            h-11
            rounded-xl
            border-0
            bg-gray-50
            pl-11
            shadow-none
            ring-0
            focus-visible:ring-2
            focus-visible:ring-gray-500
          "
        />
      </div>

      <Select
        value={searchType}
        onValueChange={(value) => setSearchType(value)}
      >
        <SelectTrigger
          className="
            h-11
            w-[180px]
            rounded-xl
            border-0
            bg-gray-50
            shadow-none
            focus:ring-2
            focus:ring-gray-500
          "
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="rounded-xl border-0 bg-white shadow-xl">
          <SelectItem value="patient">Patient</SelectItem>
          <SelectItem value="doctor">Doctor</SelectItem>
          <SelectItem value="clinic">Clinic</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              "flex h-11 w-[180px] items-center justify-between rounded-xl bg-gray-50 px-4 text-sm transition hover:bg-gray-100",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : "Select date"}

            <CalendarIcon className="h-4 w-4 opacity-60" />
          </button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-auto rounded-xl bg-white p-0 shadow-xl"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}