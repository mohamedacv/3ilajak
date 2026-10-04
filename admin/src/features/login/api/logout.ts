export async function logout() {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  if (!token) {
    throw new Error("No authentication token found");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/logout`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${decodeURIComponent(token)}`,
        Accept: "application/json",
      },
    },
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Logout failed");
  }

  document.cookie = "token=; path=/; max-age=0";
  document.cookie = "admin=; path=/; max-age=0";

  return result;
}