"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Check, Plus } from "lucide-react";

function AddAppointments() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-6 py-5 items-center cursor-pointer">
          <Plus className="w-5 h-5" />
          <span className="text-lg font-semibold">Add Appointments</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] max-w-135!">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Book Appointment
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label
                htmlFor="patient"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Patient
              </Label>
              <Input
                id="patient"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>

            <div className="grid gap-1.5">
              <Label
                htmlFor="doctor"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Doctor
              </Label>
              <Input
                id="doctor"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-1.5">
              <Label
                htmlFor="clinic"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Clinic
              </Label>
              <Input
                id="clinic"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>

            <div className="grid gap-1.5">
              <Label
                htmlFor="date"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Date
              </Label>
              <Input
                id="date"
                type="datetime-local"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="notes"
              className="text-md font-semibold uppercase text-gray-500"
            >
              Notes
            </Label>
            <Textarea id="notes" className="bg-gray-50 min-h-20 resize-none" />
          </div>
        </div>

        <DialogFooter className="gap-2 sm:gap-2">
          <DialogClose asChild>
            <Button className="flex gap-1 text-lg bg-white text-black border border-gray-700 hover:bg-gray-100 px-6 py-5 items-center cursor-pointer">
              Cancel
            </Button>
          </DialogClose>

          <Button className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-6 py-5 items-center cursor-pointer">
            <Check className="w-5 h-5" />
            <span className="text-lg font-semibold">Confirm Booking</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddAppointments;
