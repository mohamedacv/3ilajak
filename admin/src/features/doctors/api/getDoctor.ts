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


export interface DoctorResponse {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    status: "active" | "inactive";
    image: Image[],
    national_id: string;
    specialization_id: number;
    gender: "male" | "female";
    date_of_birth: string;
    blood_type: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

}


export async function getDoctor(doctorId: number): Promise<DoctorResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }


    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/details-doctors/${doctorId}`;


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