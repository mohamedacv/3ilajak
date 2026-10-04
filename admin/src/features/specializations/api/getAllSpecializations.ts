import { cookies } from "next/headers";


export interface Specializations {
    id: number;
    name: string;
    note: string;
    created_at: string;
    updated_at: string;

}

export interface SpecializationsResponse {
    status: boolean;
    data: {
        current_page: number;
        data: Specializations[];

    }

}

export async function getAllSpecializations(): Promise<SpecializationsResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/specializations`;

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
            `Failed to fetch Appointment: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}