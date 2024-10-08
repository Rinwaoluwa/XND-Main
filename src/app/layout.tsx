import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { MerchantFormProvider } from "@/lib/context/MerchantFormContext";
import HeaderNav from "@/components/header-nav/header-nav";

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: {
    template: "%s | Xchange Next Door",
    default: "Xchange Next Door",
  },
  description: "Effortlessly trade your Crypto and gift cards",
  robots: "index, follow",
  icons: {
    icon: "/assets/icons/favicon.png",
    apple: "/assets/icons/favicon.png",
  },
  category: "technology",
  openGraph: {
    title: "Xchange Next Door",
    description: "Effortlessly trade your Crypto and gift cards",
    type: "website",
    images: [
      {
        url: "/assets/images/og-img.png",
        alt: "Xchange Next Door",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Xchange Next Door",
    locale: "en_US",
  },
  twitter: {
    title: "Xchange Next Door",
    description: "Effortlessly trade your Crypto and gift cards",
    images: [
      {
        url: "/assets/images/og-img.png",
        alt: "Xchange Next Door",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body className={inter.className}>
          <MerchantFormProvider>
            <HeaderNav />
            {children}
          </MerchantFormProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
