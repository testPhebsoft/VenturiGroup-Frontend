import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  let currentTag = request.nextUrl.searchParams.get("tag");
  if (currentTag) {
    revalidateTag(currentTag);
    return NextResponse.json(
      { message: `Successfully revalidated ${currentTag}` },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { error: "Must provide tag!   Syntax:/revalidate?tag= 'yourTag'" },
      { status: 200 }
    );
  }
}
export async function POST(request) {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
