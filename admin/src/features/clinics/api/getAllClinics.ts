import { cookies } from "next/headers";

export interface Clinic {
    id: number;
    name: string;
    phone: string;
    address: string;
    max_doctors: number;
    payment_date: string;
    status: "active" | "inactive";
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
    image_url:string
}


export interface ClinicResponse {
    status: boolean;
    message: string;
    data: Clinic[];

}

interface GetAllClinicParams {
    name?: string;
}

export async function getAllClinics({
    name,
}: GetAllClinicParams = {}): Promise<ClinicResponse> {
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

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/search-by-name${queryString ? `?${queryString}` : ""
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
            `Failed to fetch Clinic: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}