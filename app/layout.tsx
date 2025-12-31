import localFont from "next/font/local";
import type { Metadata } from "next/types";
import RootProvider from "@/components/providers/root-provider";

import "@/styles/globals.css";

const blauerNue = localFont({
  src: [
    {
      path: "../public/fonts/BlauerNue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BlauerNue-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BlauerNue-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Keyon Solutions | Ihre Prozesse. Optimiert. Automatisiert.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={blauerNue.className}>
        <RootProvider>
          <main className="h-screen w-screen">{children}</main>
        </RootProvider>
      </body>
    </html>
  );
}
