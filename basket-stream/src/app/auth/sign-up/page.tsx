import Logo from "@/components/common/Logo";
import { Box } from "@mui/material";
import Image from "next/image";
import authImage from "@/images/auth.webp";
import { Metadata } from "next";
import SignupForm from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up to your account",
};

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: { md: "100vh" },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Logo />
        <SignupForm />
      </Box>

      <Box
        sx={{
          position: { md: "relative" },
          display: { xl: "flex", xs: "none" },
          flex: 1,
        }}
      >
        <Image
          src={authImage}
          alt="Sign up Image"
          width={961}
          height={962}
          style={{ width: "100%", objectFit: "cover", height: "100%" }}
          priority
          placeholder="blur"
        />
      </Box>
    </Box>
  );
}
