import { cookies } from "next/headers";


export interface Image {
    id: number;
    filename: string;
    imageable_id: number;
    imageable_type: string;
    created_at: string;
    updated_at: string;
    image_url: string
}


export interface ClinicResponse {
    id: number;
    name: string;
    description: string;
    phone: string;
    address: string;
    status: "active" | "inactive" ;
    image: Image[],
    active_admins: number;
    total_doctors: number;
    todays_visits: number;
}


export async function getClinic(clinicId: number): Promise<ClinicResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }


    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/details-clinic/${clinicId}`;


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
            `Failed to fetch Clinic: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}