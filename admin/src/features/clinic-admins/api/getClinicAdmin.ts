import { cookies } from "next/headers";


export interface ClinicAdminResponse {
    status: boolean,
    data: {
        id: number;
        name: string;
        Email:string;
        status: "Active" | "Inactive";
        clinic_id: number,
        note: string;
    }
}


export async function getClinicAdmin(clinicAdminId: number): Promise<ClinicAdminResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }


    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/adminclinic-details/${clinicAdminId}`;


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
            `Failed to fetch Clinic Admin: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}