import { Cake, FileUser, Mail, Map, Phone } from "lucide-react";
import { DoctorResponse } from "../../api/getDoctor";

function InfoDector({doctor}:{doctor:DoctorResponse}) {
  return (
    <div className="bg-white rounded-xl shadow p-7 flex flex-col gap-7 ">
      <div className="flex gap-1.5 items-center">
        <FileUser className="w-6 h-6 text-blue-700" />
        <p className="text-xl font-bold">Contact Information</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Phone className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Phone Number</p>
            <span className="font-semibold ">{doctor.phone}</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Mail className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Email Address</p>
            <span className="font-semibold ">{doctor.email}</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Map className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Address</p>
            <span className="font-semibold ">
              {doctor.address}
            </span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-blue-300 p-2 rounded-xl ">
            <Cake className="text-7 h-7 text-blue-800" />
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold text-gray-700 text-sm">Date of Birth</p>
            <span className="font-semibold ">{doctor.date_of_birth}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoDector;
