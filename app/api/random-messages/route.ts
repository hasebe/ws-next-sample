import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const message = Math.random().toString(36).substring(2);
  return NextResponse.json({ message: message }, { status: 200 });
}
