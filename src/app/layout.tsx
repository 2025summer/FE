import type { Metadata } from "next";
import React from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/globals.css";
import localFont from "next/font/local";

const gothic = localFont({
  src: [
    {
      path: "../../public/fonts/PyeojinGothic-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PyeojinGothic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PyeojinGothic-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/PyeojinGothic-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/PyeojinGothic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "땅근",
  description: "실시간 중고경매거래 사이트",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${gothic.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${gothic.className} flex h-full justify-center bg-white`}
      >
        <div className="flex h-full w-full flex-col items-center">
          <div className="w-full max-w-[1350px] px-5">
            <SiteHeader />
            <ScrollToTop />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
