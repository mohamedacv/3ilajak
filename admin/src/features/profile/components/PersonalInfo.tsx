import { User } from "@/app/dashboard/profile/page";
import { formatDate } from "@/shared/components/atoms/formatDate";

export default function PersonalInfo({ admin }: { admin: User }) {
  const statusStyle =
    admin.status == "active" ? "text-green-600" : "text-red-600";
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-5 border-b border-gray-300 ">
        <p className="text-xl font-semibold">Personal Information</p>
      </div>

      <div className="p-5 ">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-0">
              <p className="font-semibold">NAME</p>

              <span className="text-sm font-semibold text-gray-800 pl-3">
                {admin.name}
              </span>
            </div>

            <div className="space-y-0">
              <p className="font-semibold">EMAIL</p>

              <span className="text-sm font-semibold text-gray-800 pl-3">
                {admin.email}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-0">
              <p className="font-semibold">STATUS</p>
              <span
                className={`text-sm font-semibold ${statusStyle} pl-3 capitalize`}
              >
                {admin.status}
              </span>
            </div>

            <div className="space-y-0">
              <p className="font-semibold">STATUS</p>
              <span className="text-sm font-semibold text-gray-800 pl-3 capitalize">
                {formatDate(admin.created_at)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
