"use server";

import { cookies } from "next/headers";

export async function deleteAdmin(adminId: number) {
  const cookieStore = await cookies();
 
   const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthenticated");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/Admin-destroy/${adminId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete admin");
  }

  return res.json();
}