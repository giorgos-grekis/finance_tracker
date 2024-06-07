import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import RootProviders from "@/providers/RootProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyFinances",
  description:
    "Manage your personal finances effortlessly with MyFinances app. Track expenses, set budgets, and monitor your financial health in one intuitive platform. Download now for smarter money management!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body>
          <main>
            <RootProviders>{children}</RootProviders>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
