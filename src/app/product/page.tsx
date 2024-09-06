"use client"

import Link from "next/link";
import Image from "next/image";
import {SiArduino, SiCsharp, SiKotlin, SiProcessingfoundation} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {BiLogoGoLang} from "react-icons/bi";
import {GrGraphQl} from "react-icons/gr";
import {FaAndroid, FaJava, FaPython, FaRust} from "react-icons/fa";
import {TbBrandCpp} from "react-icons/tb";

export default function Contact() {
    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen min-w-min"}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <div className={"items-center flex flex-row min-h-min bg-emerald-600"}>
                        <Image src={"/favicons/favicon-32x32.png"} alt={"icon"} className={"m-2"} width={30}
                               height={30}/>
                        <div className={"p-4 rounded-3xl text-white"}>
                            <Link href={"/home"} className={"hover:underline"}>
                                Home
                            </Link>
                        </div>
                        <div className={"p-4 rounded-3xl text-white"}>
                            <Link href={"/ctf"} className={"hover:underline"}>
                                CTF
                            </Link>
                        </div>
                        <div className={"p-4 rounded-3xl text-white"}>
                            <Link href={"/blog"} className={"hover:underline"}>
                                Blog
                            </Link>
                        </div>
                        <div className={"p-4 rounded-3xl text-white"}>
                            <Link href={"/product"} className={"hover:underline"}>
                                Product
                            </Link>
                        </div>
                    </div>
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-col m-16 "}>
                            <p className={"text-8xl animate-pulse text-emerald-600"}>Product</p>
                        </div>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>B3 A C00L C35T0R</p>
                        </div>
                        <div className={"p-5 flex flex-col border-t-2 border-t-emerald-500"}>
                            <div>
                                <span className={"text-3xl text-emerald-600"}>0x1 HackU TOKYO VOL2</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/achyu1.png"} alt={"pico image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Emergency social media</p>
                                        <p className={"text-emerald-600 text-4xl"}>AchyU</p>
                                        <br />
                                        <p>Next.js & Golang</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
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