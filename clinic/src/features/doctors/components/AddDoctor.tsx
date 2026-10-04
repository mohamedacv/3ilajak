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

function AddDoctor() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-1 bg-blue-800 hover:bg-blue-950 text-white px-6 py-5 items-center cursor-pointer">
          <Plus className="w-5 h-5" />
          <span className="text-lg font-semibold">Add Doctor</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] max-w-135!">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add New Doctor
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-2">
         
            <div className="grid gap-1.5">
              <Label
                htmlFor="f_name"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Full Name
              </Label>
              <Input
                id="f_name"
                type="text"
                className="bg-gray-50 h-10 w-full rounded-xl"
              />
            </div>
          

          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1.5">
              <Label
                htmlFor="specialization"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Specialization
              </Label>
              <Input
                id="specialization"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>

            <div className="grid gap-1.5">
              <Label
                htmlFor="department"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Department
              </Label>
              <Input
                id="department"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1.5">
              <Label
                htmlFor="pone"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Phone
              </Label>
              <Input
                id="pone"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>

            <div className="grid gap-1.5">
              <Label
                htmlFor="email"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1.5">
              <Label
                htmlFor="exp"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Experience (years)
              </Label>
              <Input
                id="exp"
                type="number"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>

            <div className="grid gap-1.5">
              <Label
                htmlFor="w_hours"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Working Hours
              </Label>
              <Input
                id="w_hours"
                type="time"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-1.5">
              <Label
                htmlFor="avaliability"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Availability
              </Label>
              <Input
                id="avaliability"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
            <div className="grid gap-1.5">
              <Label
                htmlFor="rating"
                className="text-md font-semibold uppercase text-gray-500"
              >
                Rating
              </Label>
              <Input
                id="rating"
                type="text"
                className="bg-gray-50 h-10 w-60 rounded-xl"
              />
            </div>
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
            <span className="text-lg font-semibold">Save Doctor</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddDoctor;
