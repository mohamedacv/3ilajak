import { cookies } from "next/headers";


export interface Appointment {
    id: number;
    patient_id: number;
    doctor_id: number;
    clinic_id: number;
    appointment_date: string;
    status: string;
    created_at: string;
    updated_at: string;

    patient: {
        id: number;
        name: string;
    };

    doctor: {
        id: number;
        name: string;
    };

    clinic: {
        id: number;
        name: string;
    };
}

export interface AppointmentResponse {
    current_page: number;
    data: Appointment[];

}

interface GetAllAppointmentParams {
    name?: string;
}

export async function getAllAppointment({
    name,
}: GetAllAppointmentParams = {}): Promise<AppointmentResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }

    const params = new URLSearchParams();

    if (name?.trim()) {
        params.set("name", name.trim());
    }

    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/appointments`;

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