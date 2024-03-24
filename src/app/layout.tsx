import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import MainLayout from "@/app/layouts/mainLayout";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Platform",
    description: "",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="h-full bg-white" lang="en">
        <body className={inter.className + "h-full"}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}
