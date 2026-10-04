import PersonalAuthentication from "@/features/profile/components/PersonalAuthentication";
import PersonalInfo from "@/features/profile/components/PersonalInfo";
import ProfileCard from "@/features/profile/components/ProfileCard";
import ProfileInfo from "@/features/profile/components/ProfileInfo";
import RecentActivity from "@/features/profile/components/RecentActivity";
import RequestDeactivation from "@/features/profile/components/RequestDeactivation";
import { cookies } from "next/headers";

export interface User {
  name: string;
  email: string;
  status: "active" | "inActive";
  created_at: string;
}

export default async function Page() {
  const cookieStore = await cookies();

  const adminCookie = cookieStore.get("admin")?.value;

  const admin = adminCookie ? JSON.parse(adminCookie) : null;

  console.log(admin.name);
  console.log(admin.email);
  return (
    <div className="grid grid-cols-12 items-start gap-6">
      <div className="col-span-4 flex flex-col gap-6">
        <ProfileCard admin={admin} />
        <ProfileInfo admin={admin}/>
      </div>

      <div className="col-span-8 flex flex-col gap-6">
        <PersonalInfo admin={admin} />

        <PersonalAuthentication />

        <RecentActivity />
      </div>
    </div>
  );
}
