import { searchMedias } from "@/modules/media";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const term = request.nextUrl.searchParams.get("term")?.trim();
  console.log(term);

  if (!term) {
    return NextResponse.json([]);
  }

  try {
    const results = await searchMedias(term);

    return NextResponse.json(results);
  } catch {
    return NextResponse.json(
      { error: "Não foi possível pesquisar as mídias." },
      { status: 500 },
    );
  }
}
