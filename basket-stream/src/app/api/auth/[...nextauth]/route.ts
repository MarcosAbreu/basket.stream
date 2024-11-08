import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth/next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next/types";

const handler = async (req: NextRequest, res: NextResponse) => {
  const remember = (await cookies()).get("remember-me");

  const maxAge = remember?.value === "true" ? 60 * 60 * 24 * 30 : 60 * 60 * 12;

  return NextAuth(req as unknown as NextApiRequest, res as unknown as NextApiResponse, {
    ...authOptions,
    session: { maxAge: maxAge },
  });
};

export { handler as GET, handler as POST };
