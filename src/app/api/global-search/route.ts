import { NextResponse } from "next/server";
import { searchByTerm } from "@/features/globalSearch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("q")?.trim() ?? "";

  if (!term) {
    return NextResponse.json([]);
  }

  const results = await searchByTerm(term);

  return NextResponse.json(results);
}
