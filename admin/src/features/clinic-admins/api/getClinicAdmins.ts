import { Admin } from "@/features/admins/api/getAllAdmins";
import { Patients } from "@/features/patients/api/getAllPatients";
import { cookies } from "next/headers";


export interface ClinicAdmins {
    id: number;
    name: string;
    Email: string;
    password: string;
    clinic_id: number;
    note: string;
    status: string;
    created_at: string;
    updated_at: string;
    admin: Admin[];
    patients: Patients[];

    clinic: {
        id: number;
        name: string;
        phone: string;
        address: string;
    }
}

export interface ClinicAdminsResponse {
    status: boolean;
    message: string;
    data: {
        current_page: number;
        data: ClinicAdmins[]
    }

}

interface GetClinicAdminsParams {
    name?: string;
}

export async function getClinicAdmins({
    name,
}: GetClinicAdminsParams = {}): Promise<ClinicAdminsResponse> {
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

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/GetAdminClinic${queryString ? `?${queryString}` : ""
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
            `Failed to fetch Appointment: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}