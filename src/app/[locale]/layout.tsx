import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const BASE_URL = process.env.BASE_URL || "https://mj.u14.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    metadataBase: new URL(BASE_URL),
    title: t("Metadata.title"),
    description: t("Metadata.description"),
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
      title: t("Metadata.title"),
      description: t("Metadata.description"),
      siteName: t("Metadata.title"),
      images: [
        {
          url: BASE_URL + "/og.jpg",
          alt: t("Metadata.title"),
        },
      ],
    },
  };
}

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
