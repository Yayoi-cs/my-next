import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import nextConfig from "../../next.config.mjs";
const BasePath = nextConfig.basePath || ""

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "portfolio",
    description: "portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link type={"image/x-icon"} rel="apple-touch-icon" sizes="180x180" href={BasePath + "/favicons/apple-touch-icon.png"}/>
            <link type={"image/x-icon"} rel="icon" sizes="32x32" href={BasePath + "/favicons/favicon-32x32.png"}/>
            <link type={"image/x-icon"} rel="icon" sizes="16x16" href={BasePath + "/favicons/favicon-16x16.png"}/>
            <link type={"image/x-icon"} rel="manifest" href={BasePath + "/favicons/site.webmanifest"}/>
            <link type={"image/x-icon"} rel="mask-icon" href={BasePath + "/favicons/safari-pinned-tab.svg"} color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
