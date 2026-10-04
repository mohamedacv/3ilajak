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


export interface PatientResponse {
    id: number;
    name: string;
    email: string;
    Phone: string;
    Address: string;
    status: "active" | "inactive";
    Images: Image[],
    national_id: string;
    patient_id:string;
    Gender: "Male" | "Female";
    Date_Birth: string;
    Blood_Group: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
}


export async function getPatient(patientId: number): Promise<PatientResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }


    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/patients-details/${patientId}`;


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
            `Failed to fetch Patient: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}