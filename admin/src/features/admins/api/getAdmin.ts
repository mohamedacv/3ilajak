import { cookies } from "next/headers";


export interface AdminResponse {
    status: boolean,
    data: {
        id: number;
        email:string;
        name: string;
        status: "active" | "inactive";
    }
}


export async function getAdmin(adminId: number): Promise<AdminResponse> {
    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
        throw new Error("No authentication token found");
    }


    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/admin/details/${adminId}`;


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
            `Failed to fetch Admin: ${res.status} - ${responseText}`,
        );
    }

    return JSON.parse(responseText);
}