import { AddClinicInput } from "../schema/clinic";

export async function addClinics(data: AddClinicInput) {
    const rawToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

    const token = rawToken ? decodeURIComponent(rawToken) : undefined;


    if (!token) {
        throw new Error("No authentication token found");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/create-clinic`,
        {
            method: "POST",
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
        throw new Error(result.message || "Add clinic failed");
    }

    return result;
}