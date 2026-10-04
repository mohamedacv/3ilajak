import { Image } from "@/features/clinics/api/getAllClinics";
import { cookies } from "next/headers";

export interface Doctor {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    national_id: string;
    medical_license: string;
    clinic_id: number;
    specialization_id: number;
    gender: "male" | "female";
    date_of_birth: string;
    blood_type: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    address: string;
    status: "active" | "inactive" | "on_leave";
    created_at: string;
    updated_at: string;
    images: Image[];
}

export interface DoctorResponse {
    status: boolean;
    message: string;
    data: Doctor[];

}

interface GetAllDoctorsParams {
    name?: string;
}

export async function getAllDoctors({
    name,
}: GetAllDoctorsParams = {}): Promise<DoctorResponse> {
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

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/search-doctors${queryString ? `?${queryString}` : ""
        }`;

    console.log("REQUEST URL:", url);

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
            `Failed to fetch Doctor: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}