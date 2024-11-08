import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import "./globals.css";
import theme from "@/theme/theme";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ReactQueryDevtools />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
