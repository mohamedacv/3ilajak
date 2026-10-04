import { cookies } from "next/headers";

export interface Admin {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  status: string;
  last_login_at: string | null;
  remember_token: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminsResponse {
  status: boolean;
  data: {
    current_page: number;
    data: Admin[];
  };
}

interface GetAllAdminsParams {
  name?: string;
}

export async function getAllAdmins({
  name,
}: GetAllAdminsParams = {}): Promise<AdminsResponse> {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("No authentication token found");
  }

  const params = new URLSearchParams();

  if (name?.trim()) {
    params.set("name", name.trim());
  }

  const queryString = params.toString();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/All-Admin${queryString ? `?${queryString}` : ""
    }`;


  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseText = await res.text();

  if (!res.ok) {
    throw new Error(
      `Failed to fetch admins: ${res.status} - ${responseText}`,
    );
  }

  return JSON.parse(responseText);
}