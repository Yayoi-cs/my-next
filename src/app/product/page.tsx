"use client"

import Link from "next/link";
import Image from "next/image";
import {SiArduino, SiCsharp, SiKotlin, SiProcessingfoundation} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoGoLang} from "react-icons/bi";
import {GrGraphQl} from "react-icons/gr";
import {FaAndroid, FaJava, FaPython, FaRust} from "react-icons/fa";
import {TbBrandCpp} from "react-icons/tb";
import CTFCard from "@/app/components/ctfimagecard";
import HeaderComponent from "@/app/components/header";
import BlogCard from "@/app/components/blogCard";
import {productData} from "@/app/product/productData";


export default function Contact() {
    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen min-w-min"}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <HeaderComponent />
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-col m-16 "}>
                            <p className={"text-8xl animate-pulse text-emerald-600"}>Product</p>
                        </div>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>B3 A C00L C35T0R</p>
                        </div>
                        {productData.map((data,index) => (
                            <BlogCard title={data.title} image={data.image} description={data.description} link={data.link}/>
                        ))}
                        <div className={"p-5 flex flex-wrap items-center justify-center"}>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x8</span>
                                <p className={"text-emerald-600 text-2xl"}>Board game</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >Board game hardware with arduino!</p>
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <TbBrandCpp className={"text-xl text-emerald-600 m-1"}/>
                                            <SiArduino className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>

    )
}
