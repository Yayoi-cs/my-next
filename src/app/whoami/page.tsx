"use client";

import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""
import HeaderComponent from "@/app/components/header";
import ProfileComponent from "@/app/components/profile";

export default function Home() {
    return (
        <>
                <main className={"bg-white min-h-screen min-w-full relative"}>
                    <div className={"absolute bg-white min-h-screen min-w-full"}>
                        <HeaderComponent/>
                        <div className={"flex flex-col m-2 min-h-screen  items-center justify-center"}>
                            <ProfileComponent />
                        </div>
                    </div>
                </main>
        </>
    )
}
