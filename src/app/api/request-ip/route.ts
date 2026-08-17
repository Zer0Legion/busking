import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cloudflareIp = request.headers.get("cf-connecting-ip");

  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    realIp ||
    cloudflareIp ||
    "unknown";

  return NextResponse.json({ ip });
}
