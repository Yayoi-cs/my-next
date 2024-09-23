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
                        <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                            <CTFCard title={"0x1 HackU TOKYO VOL2"} imgSrc={"/images/achyu1.png"} altText={""} participant={"Emergency social media"} rank={"AchyU"} description={"Next.js & Golang"} />
                        </div>
                        <div className={"p-5 flex flex-row"}>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x2</span>
                                <p className={"text-emerald-600 text-2xl"}>Diary with AI</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >Shy to sharing your diary?</p>
                                        <p >Sharing to AI!</p>
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <FaAndroid className={"text-xl text-emerald-600 m-1"}/>
                                            <SiKotlin className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x3</span>
                                <p className={"text-emerald-600 text-2xl"}>Reception Studio</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >Need a reception system?</p>
                                        <p >Use this!</p>
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <RiNextjsFill className={"text-xl text-emerald-600 m-1"}/>
                                            <RiTailwindCssFill className={"text-xl text-emerald-600 m-1"}/>
                                            <BiLogoGoLang className={"text-xl text-emerald-600 m-1"}/>
                                            <GrGraphQl className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x4</span>
                                <p className={"text-emerald-600 text-2xl"}>SMASS Client</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >Client application for SMASS project!</p>
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <SiCsharp className={"text-xl text-emerald-600 m-1"}/>
                                            <p>WPF</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x5</span>
                                <p className={"text-emerald-600 text-2xl"}>RsaOracle</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >Study RSA!</p>
                                        <br />
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <BiLogoGoLang className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x6</span>
                                <p className={"text-emerald-600 text-2xl"}>TcpClients</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >TcpClient in many language!</p>
                                        <br />
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <BiLogoGoLang className={"text-xl text-emerald-600 m-1"}/>
                                            <FaPython className={"text-xl text-emerald-600 m-1"}/>
                                            <FaRust className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"p-5 flex flex-row"}>
                            <div className={"flex flex-col shadow-2xl shadow-emerald-300 h-48 w-64 p-4 m-3 rounded-2xl"}>
                                <span className={"text-2xl text-emerald-600"}>0x7</span>
                                <p className={"text-emerald-600 text-2xl"}>Code Typing</p>
                                <div className={"flex flex-row items-center"}>
                                    <div className={"flex flex-col border-t-2 border-t-emerald-600"}>
                                        <p >You wanna be a nice programmer?</p>
                                        <br />
                                        <div className={"flex flex-row items-center"}>
                                            <FaJava className={"text-xl text-emerald-600 m-1"}/>
                                            <SiProcessingfoundation className={"text-xl text-emerald-600 m-1"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            <style jsx>
                {`
                    .ctf-img {
                        display: block;
                        width: 50%;
                        height: 50%;
                        object-fit: cover;
                    }
                `}
            </style>
        </>

    )
}