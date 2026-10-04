import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function PersonalPatient() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Personal Info</h1>

      <div className="grid gap-4 ">
        <div className="grid grid-cols-2 gap-4">
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
              className="bg-gray-50 h-10 rounded-xl"
            />
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="phone"
              className="text-md font-semibold uppercase text-gray-500"
            >
              Phone
            </Label>
            <Input
              id="phone"
              type="text"
              className="bg-gray-50 h-10 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label
              htmlFor="email"
              className="text-md font-semibold uppercase text-gray-500"
            >
              Email
            </Label>
            <Input
              id="patient"
              type="email"
              className="bg-gray-50 h-10 rounded-xl"
            />
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="n_id"
              className="text-md font-semibold uppercase text-gray-500"
            >
              National ID
            </Label>
            <Input
              id="n_id"
              type="text"
              className="bg-gray-50 h-10 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label
              htmlFor="gender"
              className="text-md font-semibold uppercase text-gray-500"
            >
              GENDER
            </Label>

            <Select>
              <SelectTrigger
                id="gender"
                className="bg-gray-50 h-10 py-5 rounded-xl w-full"
              >
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>

              <SelectContent
                position="popper"
                side="bottom"
                align="start"
                sideOffset={1}
                className="bg-white"
              >
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
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
              className="bg-gray-50 h-10 py-5 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <Label
              htmlFor="blood"
              className="text-md font-semibold uppercase text-gray-500"
            >
              Blood Group
            </Label>

            <Select>
              <SelectTrigger
                id="blood"
                className="bg-gray-50 h-10 py-5 rounded-xl w-full"
              >
                <SelectValue placeholder="Select Blood Type" />
              </SelectTrigger>

              <SelectContent
                position="popper"
                side="bottom"
                align="start"
                sideOffset={1}
                className="bg-white"
              >
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-1.5">
            <Label
              htmlFor="address"
              className="text-md font-semibold uppercase text-gray-500"
            >
              Address
            </Label>
            <Input
              id="address"
              type="text"
              className="bg-gray-50 h-10 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalPatient;
