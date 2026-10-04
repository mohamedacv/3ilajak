import type { Metadata } from "next";
import "./globals.css";
import AppProviders from "@/providers/AppProviders";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "3ilajak Admin",
  description: "3ilajak Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <AppProviders>
          <NuqsAdapter>{children}</NuqsAdapter>
          <Toaster position="top-center" />
        </AppProviders>
      </body>
    </html>
  );
}
