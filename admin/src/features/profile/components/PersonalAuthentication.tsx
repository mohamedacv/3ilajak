import { Switch } from "@/components/ui/switch";
import { ShieldCheck } from "@/assets/icon/icons";

function PersonalAuthentication() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-5 border-b border-gray-300 ">
        <p className="text-xl font-semibold">Personal Information</p>
      </div>

      <div className="p-7 border-b border-gray-300 flex justify-between items-center gap-3">
        <div>
          <p className="font-semibold">Password</p>
          <p>
            Last changed: 3 months ago. We recommend a change every 6 months.
          </p>
        </div>
      </div>

      <div className="p-5 border-b border-gray-300 flex justify-around gap-3 items-center">
        <div className="p-3 bg-green-500 rounded-full">
          <ShieldCheck className=" text-green-900 w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold">Two-Factor Authentication (2FA)</p>
          <p>
            Keep your account secure by adding an extra layer of protection.
          </p>
        </div>
        <Switch size="default" className=" data-[state=checked]:bg-green-800 data-[state=unchecked]:bg-gray-300"/>
      </div>
    </div>
  );
}

export default PersonalAuthentication;
