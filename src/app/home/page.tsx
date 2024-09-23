"use client";

import Link from "next/link";
import Image from "next/image";
import {FormEvent, useEffect, useState} from "react";
import nextConfig from "../../../next.config.mjs";
import HeaderComponent from "@/app/components/header";
const BasePath = nextConfig.basePath || ""

export default function Home() {

    const [hello, setHello] = useState<string>("")
    const [world, setWorld] = useState<string>("")
    const [flag] = useState<string>("flag{Y0u_f1nd_m3??}")

    const sleep = async (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    useEffect(() => {
        const typingHello = async () => {
            const finalHello: string = "Hello,"
            for (let i: number = 0; i < finalHello.length; i++) {
                setHello(finalHello.substring(0, i + 1))
                await sleep(100)
            }
            const finalWorld: string = "World!!"
            for (let i: number = 0; i < finalWorld.length; i++) {
                setWorld(finalWorld.substring(0, i + 1))
                await sleep(100)
            }
        }
        typingHello()
    }, []);

    const [imageUrl, setImageUrl] = useState<string>("/images/portfolio3.jpg")

    useEffect(() => {
        const imageSlider = async () => {
            let i = 1
            while (true) {
                setImageUrl(BasePath+  "/images/portfolio" + i.toString() + ".jpg")
                i = (i + 1) % 3 + 1
                await sleep(10000)
            }
        }
        imageSlider()
    }, []);

    const handleClick = (e: FormEvent<HTMLParagraphElement>, i: number) => {
        setImageUrl(BasePath + "/images/portfolio" + i.toString() + ".jpg")
    }

    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen min-w-full"}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <HeaderComponent />
                    <div
                        className={"flex flex-row min-h-min min-w-min shadow-2xl shadow-emerald-300 items-center justify-start self-center m-16"}>
                        <img className={"m-6 shadow-2xl slide-img"} src={imageUrl} alt={"image"}/>
                        <div className={"flex flex-col min-h-min"}>
                            <p onClick={(e) => handleClick(e, 3)}
                               className={"hover:underline text-emerald-600 text-4xl m-3"}>My ctf</p>
                            <p onClick={(e) => handleClick(e, 2)}
                               className={"hover:underline text-emerald-600 text-4xl m-3"}>My THM</p>
                            <p onClick={(e) => handleClick(e, 1)}
                               className={"hover:underline text-emerald-600 text-4xl m-3"}>My skills</p>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-col m-16"}>
                            <p className={"text-8xl animate-pulse"}>{hello} <span
                                className={"text-emerald-600"}>{world}</span></p>
                        </div>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>No exception, only known error</p>
                        </div>
                        <div className={"p-2 flex flex-col border-t-2 border-t-emerald-500"}>
                            <p className={"text-xl"}>
                                <span className={"text-2xl bold text-emerald-600"}>0x1 Greetings!</span><br/>
                                Welcome to my portfolio! Nice to meet you travelers.<br/>
                                I'm **REDACTED**, call oneself as @k0080.<br/>
                                Under graduate student in Japan.<br/><br/>
                                <span className={"text-2xl bold text-emerald-600"}>0x2 Activity -ctf-</span><br/>
                                I often play Capture the Flag and mainly solve pwn.<br/>
                                Member of team SUSHI1ST, the Japan's top student CTF team.<br/>
                                Look <Link href={"/ctf"} className={"text-emerald-600 hover:underline"}>here</Link> to
                                check my ctf history.<br/><br/>
                                <span className={"text-2xl bold text-emerald-600"}>0x3 Activity -developing-</span><br/>
                                Sometime, develop an application for hackathon.<br/>
                                My product is <Link href={"#"}
                                                    className={"text-emerald-600 hover:underline"}>here</Link>!<br/>
                                Make secure to all of my application!<br/><br/>
                                <span className={"text-2xl bold text-emerald-600"}>0x4 Idle</span><br/>
                                The subtitle "No exception, only known error" is my favorite word.<br/>
                                This idea is hardly effected by Golang.There's no exception.<br/>
                                Only the known error exists in not only code, but also all of my life.<br/><br/>
                                <span className={"text-2xl bold text-emerald-600"}>0x5 Contact me!</span><br/>
                                If you want to contact to me, check my github!<br/>
                            </p>
                        </div>
                        <div className={"p-2"}>
                            <p className={"text-3xl text-transparent"}>{flag}</p>
                        </div>
                    </div>
                </main>
            </div>
            <style jsx>
                {`
                    .slide-img {
                        display: block;
                        width: 55%;
                        height: 55%;
                        object-fit: cover;
                    }
                `}
            </style>
        </>
    )
}
