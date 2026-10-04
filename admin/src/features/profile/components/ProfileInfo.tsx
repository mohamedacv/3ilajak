import { User } from "@/app/dashboard/profile/page";
import { Mail, MapPin, Phone } from "@/assets/icon/icons";

function ProfileInfo({ admin }: { admin: User }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h2>
      </div>

      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Mail className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm font-medium text-gray-900">{admin.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-blue-100 p-2">
            <Phone className="h-5 w-5 text-gray-600" />
          </div>

          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-sm font-medium text-gray-900">
              +20 111 207 9745
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
