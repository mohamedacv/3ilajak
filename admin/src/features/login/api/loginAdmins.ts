
export type LoginInput = {
    email: string;
    password: string;
};

export async function loginAdmin(data: LoginInput) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        },
    );

    if (!res.ok) {
        throw new Error("Login failed");
    }

    const result = await res.json();

    return result;
}