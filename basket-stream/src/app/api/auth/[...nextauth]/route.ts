import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookiesStore = await cookies();
  const remember = cookiesStore.get("remember-me");

  const maxAge = remember?.value === "true" ? 60 * 60 * 24 * 30 : 60 * 60 * 12;

  // Configure the authOptions with session settings
  const options = {
    ...authOptions,
    session: { maxAge },
  };

  // Use NextAuth as a function directly with the options object
  return NextAuth(options);
}

export const POST = GET;
