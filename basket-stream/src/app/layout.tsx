import type { Metadata } from "next";
import { Box, ThemeProvider } from "@mui/material";
import "./globals.css";
import theme from "@/theme/theme";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "@/components/common/Header/Header";

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
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ReactQueryProvider>
            <ReactQueryDevtools />
            <ThemeProvider theme={theme}>
              <Header />
              <Box
                sx={{
                  flexGrow: 1,
                  overflowY: "auto", // Apply scroll to the content area
                }}
              >
                {children}
              </Box>
            </ThemeProvider>
          </ReactQueryProvider>
        </Box>
      </body>
    </html>
  );
}
