import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { token, admin } = await request.json();

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("token", token, {
    httpOnly: false,
    path: "/",
  });

  response.cookies.set("admin", JSON.stringify(admin), {
    httpOnly: false,
    path: "/",
  });

  return response;
}