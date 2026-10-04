import { UpdateDoctorsInput } from "../schema/doctors";

export async function updateDoctor(doctorId?: number, data?: UpdateDoctorsInput) {
    const rawToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    const token = rawToken ? decodeURIComponent(rawToken) : undefined;


    if (!token) {
        throw new Error("No authentication token found");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/update/${doctorId}`,
        {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }
    );

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Update clinic failed");
    }

    return result;
}