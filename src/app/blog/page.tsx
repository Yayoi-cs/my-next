"use client"

import Link from "next/link";
import Image from "next/image";

export default function Blog() {
    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen"}>
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
                    <div className={"flex flex-col"}>
                        <div className={"flex flex-col m-16 self-center"}>
                            <p className={"text-8xl animate-pulse text-emerald-600"}>Blog</p>
                        </div>
                        <div className={"flex flex-col m-2 self-center"}>
                            <p className={"text-2xl"}>S4AR1NG MY T1PS</p>
                        </div>
                        <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                            <div className={"flex flex-col"}>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x7</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>N00bz CTF Writeup!</p>
                                        <p className={"m-2"}>
                                            I played N00bzCTF 2024 and got 32 place in team SUSHI1ST.<br/>
                                            I couldn't solve only 2 challenge!<br />
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@tsuneki/SkxTEjptA"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x6</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>Imaginary Writeup!</p>
                                        <p className={"m-2"}>
                                            I played ImaginaryCTF2024.<br/>
                                            All challenges were high quality and so fun!<br />
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@tsuneki/S1DmbWa_R"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x5</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>DownUnder CTF Writeup!</p>
                                        <p className={"m-2"}>
                                            From 05,July to 48 hours I played DownUnderCTF2024.<br/>
                                            I wrote only writeup for pwn challenge,"vector overflow".<br/>
                                            C++ pwn challenge is so funny!<br/>
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@tsuneki/SJl--TRwwC"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x4</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>UIU CTF Writeup!</p>
                                        <p className={"m-2"}>
                                            From 29,June to 48 hours I played UIU CTF.<br/>
                                            The web challenge, "Fare Evasion" was funny for me!<br/>
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@tsuneki/Bk6jdo1w0"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x3</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>SECCON BEGINNERS Writeup!</p>
                                        <p className={"m-2"}>
                                            From 15,June to 24 hours I played SECCON BEGINNERS and got 28th place in
                                            team nitkc.<br/>
                                            Mainly solve pwn and web!<br/>
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@tsuneki/rJg8eehHA"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x2</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>Diver OSINT CTF Writeup!</p>
                                        <p className={"m-2"}>
                                            From 8,June to 24 hours I played Diver OSINT CTF and got 10th place in team
                                            UFO_TH_JP.<br/>
                                            This CTF was specialized with Open Source Intelligence!<br/>
                                            Be careful your social media!<br/>
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://hackmd.io/@YumaOchi/rJ52sqGH0"}>
                                                [HackMD]writeup!
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={"flex flex-row"}>
                                    <p className={"m-2 text-emerald-600 text-4xl"}>0x1</p>
                                    <div>
                                        <p className={"m-2 text-2xl"}>PicoCTF WriteUp</p>
                                        <p className={"m-2"}>
                                            From 12,March to 26,March I played picoCTF2024 and got 7th place in JPN
                                            Student.<br/>
                                            Got perfect score in general skills and forensics!<br/>
                                            picoCTF2024 is still active on picoGym!<br/>
                                            <a className={"text-emerald-600 hover:underline"}
                                               href={"https://github.com/Yayoi-cs/PicoCTF2024WriteUps/blob/main/Writerside/topics/OverView.md"}>
                                                [github]writeup!
                                            </a>
                                        </p>
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