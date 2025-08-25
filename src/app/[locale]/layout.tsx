import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const BASE_URL = process.env.BASE_URL || "https://mj.u14.app";

const title = "MidJourney Prompt Generator";
const description =
  "Give your ideas and let AI use its imagination. Everyone can be a master of prompt.";
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title,
  description,
  referrer: "no-referrer",
  icons: {
    icon: {
      type: "image/png",
      url: "/logo.png",
    },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title,
    description,
    siteName: title,
    images: [
      {
        url: BASE_URL + "/og.jpg",
        alt: title,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  viewportFit: "cover",
  userScalable: false,
  themeColor: "#FFFFFF",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
