import { cookies } from "next/headers";

export interface Patients {
  id: number;
  name: string;
  email: string;
  password: string;
  Phone: string;
  Date_Birth: string;
  patient_id: string;
  last_visit: string;
  status: "active" | "inactive";
  Gender: string;
  Blood_Group: string;
  Address: string;
  created_at: string;
  updated_at: string;
  images: Image[];
}

export interface Image {
  id: number;
  filename: string;
  imageable_id: number;
  imageable_type: string;
  created_at: string;
  updated_at: string;
  image_url: string;
}

export interface PatientsResponse {
  status: boolean;
  message: string;
  data: Patients[];
}

interface GetAllPatientsParams {
  name?: string;
}

export async function getAllPatients({
  name,
}: GetAllPatientsParams = {}): Promise<PatientsResponse> {
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

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/search-patient${
    queryString ? `?${queryString}` : ""
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
    throw new Error(`Failed to fetch Clinic: ${res.status} - ${responseText}`);
  }

  return JSON.parse(responseText);
}
