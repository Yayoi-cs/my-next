"use client";

import Link from "next/link";
import {FormEvent, useEffect, useState} from "react";
import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""
import HeaderComponent from "@/app/components/header";
import BlogCard from "@/app/components/blogCard";
import {blogData} from "@/app/components/blogData";
import TestCard from "@/app/components/testCard";
import Image from "next/image";
import LoadComponent from "@/app/home/loadComponent";
import XMLTreeViewer from "@/app/components/XMLTreeViewer";

export default function Home() {

    const sleep = async (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    const [isLoading, setIsLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)

            setTimeout(() => {
                setIsVisible(false)
            }, 500)

        }, 1000)

        return () => clearTimeout(timer)
    }, []);

    return (
        <>
            <div className={`bg-white ${isVisible ? "overflow-hidden" : ""} relative flex flex-col items-center justify-center min-h-screen min-w-full`}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <div className={`absolute z-10 ${isLoading ? "bg-white" : "bg-transparent"} min-h-screen min-w-full ${!isVisible ? `invisible`: `visible`}`}>
                        <LoadComponent isLoading={isLoading}/>
                    </div>
                    <div className={"absolute z-0 bg-white min-h-screen min-w-full"}>
                        <HeaderComponent/>
                        <div style={{position: "relative", height: 550, overflow: "hidden"}}
                             className={"items-center justify-center"}>
                            <Image src={BasePath + "/images/pic2.jpg"} alt={"pic"}
                                   layout={"fill"}
                                   objectFit={"cover"}
                            />
                            <div style={{position: "absolute", bottom: 0, width: "100%"}}>
                                <svg className="waves" xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink"
                                     viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                                    <defs>
                                        <path id="gentle-wave"
                                              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
                                    </defs>
                                    <g className="parallax">
                                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)"/>
                                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
                                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"/>
                                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className={"flex flex-col items-center mt-2"}>
                            <p className={"md:text-8xl sm:text-6xl text-3xl "}><span
                                className={"text-emerald-600"}>pwned</span> by <span
                                className={"text-emerald-600"}>tsune</span></p>
                        </div>

                        <div className={"flex flex-col m-2 items-center"}>
                            <p className={"text-2xl text-emerald-600"}>Blog</p>
                        </div>


                        <div className={"flex w-auto md:flex-row flex-col border-t-2 border-t-emerald-500"}>

                        <div className={"flex md:w-3/4 w-full md:border-r-2 border-0"}>
                        <div className={"flex flex-grow flex-auto"}/>
                        <div className={"flex mb-6 w-full flex-col items-center flex-grow"} id={"blog"}>
                            {
                                blogData.map((data, index) => (
                                    <TestCard
                                        key={"blogCard_" + data.title + index.toString()}
                                        title={data.title}
                                        description={data.description}
                                        link={data.link}/>
                                ))
                            }
                        </div>
                        </div>
                        <XMLTreeViewer />
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

                    .waves {
                        position: relative;
                        width: 100%;
                        height: 15vh;
                        margin-bottom: -7px; /*Fix for safari gap*/
                        min-height: 100px;
                        max-height: 150px;
                    }

                    .content {
                        position: relative;
                        height: 20vh;
                        text-align: center;
                        background-color: white;
                    }

                    /* Animation */

                    .parallax > use {
                        animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
                    }

                    .parallax > use:nth-child(1) {
                        animation-delay: -2s;
                        animation-duration: 7s;
                    }

                    .parallax > use:nth-child(2) {
                        animation-delay: -3s;
                        animation-duration: 10s;
                    }

                    .parallax > use:nth-child(3) {
                        animation-delay: -4s;
                        animation-duration: 13s;
                    }

                    .parallax > use:nth-child(4) {
                        animation-delay: -5s;
                        animation-duration: 20s;
                    }

                    @keyframes move-forever {
                        0% {
                            transform: translate3d(-90px, 0, 0);
                        }
                        100% {
                            transform: translate3d(85px, 0, 0);
                        }
                    }

                    /*Shrinking for mobile*/
                    @media (max-width: 768px) {
                        .waves {
                            height: 40px;
                            min-height: 40px;
                        }

                        .content {
                            height: 30vh;
                        }

                        h1 {
                            font-size: 24px;
                        }
                    }
                `}
            </style>
        </>
    )
}
