
export type addAdminInput = {
    name: string;
    email: string;
    password: string;
    password_con: string;
};

export async function addAdmin(data: addAdminInput) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/signup`,
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