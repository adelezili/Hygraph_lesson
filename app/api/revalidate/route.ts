import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

// Maps Hygraph model __typename values to cache tags
const MODEL_TAG_MAP: Record<string, string[]> = {
  Book: ["books"],
  Page: ["homepage"],
  FeaturedBooks: ["homepage"],
  Section: ["homepage"],
  GeneralLayout: ["layout"],
};

export async function POST(request: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  let body: { data?: { __typename?: string } };

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const typename = body?.data?.__typename;

  if (!typename) {
    return Response.json(
      { message: "Missing data.__typename in body" },
      { status: 400 }
    );
  }

  const tags = MODEL_TAG_MAP[typename];

  if (!tags) {
    return Response.json(
      { message: `Unknown model: ${typename}` },
      { status: 400 }
    );
  }

  for (const tag of tags) {
    revalidateTag(tag, { expire: 0 });
  }

  return Response.json({ revalidated: true, tags, now: Date.now() });
}
