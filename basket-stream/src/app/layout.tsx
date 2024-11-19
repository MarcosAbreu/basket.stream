import type { Metadata } from "next";
import { Box, ThemeProvider } from "@mui/material";
import "./globals.css";
import theme from "@/theme/theme";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { url } from "inspector";

export const metadata: Metadata = {
  title: {
    default: "Basket.Stream",
    template: "%s | Basket.Stream",
  },
  description: "Basket.Stream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box
          sx={{
            backgroundColor: "common.black",
            backgroundRepeat: "no-repeat",
            backgroundSize: {
              xs: "contain",
              md: "cover",
            },
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundImage: {
              xs: "url('/background-mobile.webp')",
              md: "url('/background.webp')",
            },
            "@media (orientation: landscape) and (max-height: 600px)": {
              backgroundImage: "url('/background.webp')",
            },
            width: "100%", // Ensure the container spans the full viewport width
            maxWidth: "100vw", // Prevents horizontal overflow
            minHeight: "100vh", // Ensures the container covers the full viewport height
            overflowX: "hidden", // Prevents content from overflowing horizontally
            display: "flex", // Allows for flexible layout adjustments
            flexDirection: "column",
          }}
        >
          <ReactQueryProvider>
            <ReactQueryDevtools />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </ReactQueryProvider>
        </Box>
      </body>
    </html>
  );
}
