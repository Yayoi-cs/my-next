"use client";

import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""
import Link from "next/link";
import CTFCard from "@/app/components/ctfimagecard";
import HeaderComponent from "@/app/components/header"
import {thmData} from "@/app/ctf/thmData";
import BlogCard from "@/app/components/blogCard";
import {badgeData} from "@/app/ctf/badgeData";
import {ctfData} from "@/app/ctf/ctfData";

export default function Home() {
    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen"}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <HeaderComponent/>
                    <div style={{position: "relative", height: 550, overflow: "hidden"}}
                         className={"items-center justify-center"}>
                        <img src={BasePath + "/images/ida.png"} alt={"pic"}
                             style={{objectFit: "cover", objectPosition: "center", width: "100%", height: "100%"}}/>

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
                    <div className={"flex flex-col items-center mb-2 mt-2"}>
                        <p className={"md:text-8xl sm:text-6xl text-3xl animate-pulse"}>Capture<span
                            className={"text-emerald-600"}>the</span>Flag</p>
                    </div>
                    <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                        {ctfData.map((ctf, index) => (
                            <CTFCard
                                key={"ctf_" + ctf.title}
                                title={ctf.title}
                                imgSrc={ctf.imgSrc}
                                altText={ctf.altText}
                                participant={ctf.participant}
                                rank={ctf.rank}
                            />
                        ))}
                    </div>
                    {/*
                    <div className={"flex flex-col m-2"}>
                        <p className={"text-2xl"}>Try <a
                            href={"https://tryhackme.com/p/k0080"}
                            className={"text-emerald-600 hover:underline"}> Hack </a> Me</p>
                    </div>
                    <div className={"p-5 flex flex-col border-t-2 border-t-emerald-500"}>
                        <span className={"text-2xl bold text-emerald-600"}>0x1 Badges</span>
                        {badgeData.map((data, index) => (
                            <BlogCard
                                key={"badge_" + data.title}
                                title={data.title}
                                image={data.image}
                                description={["", "", ""]}
                                link={"#"}
                            />
                        ))}
                        <span className={"text-2xl bold text-emerald-600"}>0x2 Completed Rooms</span>
                        {
                            thmData.map((data, index) => (
                                <BlogCard key={"thmData_" + data.title} title={data.title} image={data.image}
                                          description={data.description} link={data.link}/>
                            ))
                        }
                    </div>
*/}
                </main>
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
            </div>
        </>
    )
}
