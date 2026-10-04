import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json(
            { message: "No authentication token found" },
            { status: 401 },
        );
    }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/logout`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        },
    );

    const result = await response.json();

    if (!response.ok) {
        return NextResponse.json(
            { message: result.message || "Logout failed" },
            { status: response.status },
        );
    }

    // حذف الـ Cookie بعد نجاح Logout
    cookieStore.delete("token");

    return NextResponse.json(result);
}