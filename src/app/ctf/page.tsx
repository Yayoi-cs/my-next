"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {

    const sleep = async (ms: number) => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }


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
                    <div className={"flex flex-col items-center justify-center"}>
                        <div className={"flex flex-col m-16"}>
                            <p className={"text-8xl animate-pulse text-emerald-600"}>Topic</p>
                        </div>
                        <p className={"p-2"}>Writeup & Article is also <Link href={"/blog"}
                                                                             className={"text-emerald-600 hover:underline"}>here</Link>!
                        </p>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>B3 A G00D H4CK3R -CTF-</p>
                        </div>
                        <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                            <div>
                                <span className={"text-3xl text-emerald-600"}>0x1 picoCTF2024</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/pico.png"} alt={"pico image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Jp student Solo</p>
                                        <p className={"text-emerald-600 text-4xl"}>7th</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <span className={"text-3xl bold text-emerald-600"}>0x2 WaniCTF2024</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/wani.png"} alt={"wani image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Team : SUSHI1ST</p>
                                        <p className={"text-emerald-600 text-4xl"}>8th</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <span className={"text-3xl bold text-emerald-600"}>0x3 DiverOSINT CTF</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/diver.png"} alt={"diver image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Team : UFO_TH_JP</p>
                                        <p className={"text-emerald-600 text-4xl"}>10th</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <span className={"text-3xl bold text-emerald-600"}>0x4 WaniCTF2024</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/ctf4b.png"} alt={"ctf4b image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Team : NITKC</p>
                                        <p className={"text-emerald-600 text-4xl"}>28th</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <span className={"text-3xl bold text-emerald-600"}>0x5 N00BZCTF 2024</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/noobz.png"} alt={"noobz image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Team : SUSHI1ST</p>
                                        <p className={"text-emerald-600 text-4xl"}>32nd</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <span className={"text-3xl bold text-emerald-600"}>0x6 AlpacaHack test1</span><br/><br/>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/alpaca1.png"} alt={"alpaca image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <p className={"text-2xl"}>Solo @ k0080</p>
                                        <p className={"text-emerald-600 text-4xl"}>17th</p>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>B3 A 1NT3ll3CTU41 H4CK3R -<a
                                href={"https://tryhackme.com/p/k0080"}
                                className={"text-emerald-600 hover:underline"}>THM</a>-</p>
                        </div>
                        <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                            <span className={"text-3xl bold text-emerald-600"}>0x1 Badges</span><br/><br/>
                            <div>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/k0080-badges-7-day-streak.png"} alt={"pico image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <span className={"text-3xl text-emerald-600"}>7 day streak</span>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/k0080-badges-hash-cracker.png"} alt={"wani image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <span className={"text-3xl text-emerald-600"}>Hash Cracker</span>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/k0080-badges-ohsint.png"} alt={"diver image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <span className={"text-3xl text-emerald-600"}>OhSINT</span>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div>
                                <div className={"flex flex-row items-center"}>
                                    <img src={"/images/k0080-badges-terminaled.png"} alt={"ctf4b image"}
                                         className={"ctf-img shadow-emerald-300 shadow-2xl"}/>
                                    <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                                        <span
                                            className={"text-3xl bold text-emerald-600"}>cat linux.txt</span>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <span className={"text-3xl bold text-emerald-600"}>0x2 Completed Rooms</span><br/><br/>
                            <a href={"https://tryhackme.com/r/room/x8664arch"}
                               className={"text-emerald-600 hover:underline m-1"}>[x86 Architecture
                                Overview](https://tryhackme.com/r/room/x8664arch) </a>
                            <a href={"https://tryhackme.com/r/room/becomeahackeroa"}
                               className={"text-emerald-600 hover:underline m-1"}>[Become a
                                Hacker](https://tryhackme.com/r/room/becomeahackeroa) </a>
                            <a href={"https://tryhackme.com/r/room/introtodockerk8pdqk"}
                               className={"text-emerald-600 hover:underline m-1"}>[Intro to
                                Docker](https://tryhackme.com/r/room/introtodockerk8pdqk) </a>
                            <a href={"https://tryhackme.com/r/room/introtooffensivesecurity"}
                               className={"text-emerald-600 hover:underline m-1"}>[Intro to Offensive
                                Security](https://tryhackme.com/r/room/introtooffensivesecurity) </a>
                            <a href={"https://tryhackme.com/r/room/h4cked"}
                               className={"text-emerald-600 hover:underline m-1"}>[h4cked](https://tryhackme.com/r/room/h4cked) </a>
                            <a href={"https://tryhackme.com/r/room/encryptioncrypto101"}
                               className={"text-emerald-600 hover:underline m-1"}>[Encryption - Crypto
                                101](https://tryhackme.com/r/room/encryptioncrypto101) </a>
                            <a href={"https://tryhackme.com/r/room/tutorial"}
                               className={"text-emerald-600 hover:underline m-1"}>[Tutorial](https://tryhackme.com/r/room/tutorial) </a>
                            <a href={"https://tryhackme.com/r/room/reverselfiles"}
                               className={"text-emerald-600 hover:underline m-1"}>[Reversing
                                ELF](https://tryhackme.com/r/room/reverselfiles) </a>
                            <a href={"https://tryhackme.com/r/room/easyctf"}
                               className={"text-emerald-600 hover:underline m-1"}>[Simple
                                CTF](https://tryhackme.com/r/room/easyctf) </a>
                            <a href={"https://tryhackme.com/r/room/c4ptur3th3fl4g"}
                               className={"text-emerald-600 hover:underline m-1"}>[c4ptur3-th3-fl4g](https://tryhackme.com/r/room/c4ptur3th3fl4g) </a>
                            <a href={"https://tryhackme.com/r/room/ohsint"}
                               className={"text-emerald-600 hover:underline m-1"}>[OhSINT](https://tryhackme.com/r/room/ohsint) </a>
                            <a href={"https://tryhackme.com/r/room/careersincyber"}
                               className={"text-emerald-600 hover:underline m-1"}>[Careers in
                                Cyber](https://tryhackme.com/r/room/careersincyber) </a>
                            <a href={"https://tryhackme.com/r/room/defensivesecurity"}
                               className={"text-emerald-600 hover:underline m-1"}>[Intro to Defensive
                                Security](https://tryhackme.com/r/room/defensivesecurity) </a>
                            <a href={"https://tryhackme.com/r/room/introwebapplicationsecurity"}
                               className={"text-emerald-600 hover:underline m-1"}>[Web Application
                                Security](https://tryhackme.com/r/room/introwebapplicationsecurity) </a>
                            <a href={"https://tryhackme.com/r/room/introdigitalforensics"}
                               className={"text-emerald-600 hover:underline m-1"}>[Intro to Digital
                                Forensics](https://tryhackme.com/r/room/introdigitalforensics) </a>
                            <a href={"https://tryhackme.com/r/room/metasploitintro"}
                               className={"text-emerald-600 hover:underline m-1"}>[Metasploit:
                                Introduction](https://tryhackme.com/r/room/metasploitintro) </a>
                            <a href={"https://tryhackme.com/r/room/vulnerabilities101"}
                               className={"text-emerald-600 hover:underline m-1"}>[Vulnerabilities
                                101](https://tryhackme.com/r/room/vulnerabilities101) </a>
                            <a href={"https://tryhackme.com/r/room/pentestingfundamentals"}
                               className={"text-emerald-600 hover:underline m-1"}>[Pentesting
                                Fundamentals](https://tryhackme.com/r/room/pentestingfundamentals) </a>
                            <a href={"https://tryhackme.com/r/room/beginnerpathintro"}
                               className={"text-emerald-600 hover:underline m-1"}>[Learning Cyber
                                Security](https://tryhackme.com/r/room/beginnerpathintro) </a>
                            <a href={"https://tryhackme.com/r/room/linuxfundamentalspart1"}
                               className={"text-emerald-600 hover:underline m-1"}>[Linux Fundamentals
                                Part1](https://tryhackme.com/r/room/linuxfundamentalspart1) </a>
                            <a href={"https://tryhackme.com/r/room/basicpentestingjt"}
                               className={"text-emerald-600 hover:underline m-1"}>[Basic
                                Pentesting](https://tryhackme.com/r/room/basicpentestingjt) </a>
                            <a href={"https://tryhackme.com/r/room/registrypersistencedetection"}
                               className={"text-emerald-600 hover:underline m-1"}>[Registry Persistence
                                Detection](https://tryhackme.com/r/room/registrypersistencedetection)</a>
                            <a href={"https://tryhackme.com/r/room/historyofmalware"}
                               className={"text-emerald-600 hover:underline m-1"}>[History of
                                Malware](https://tryhackme.com/r/room/historyofmalware)</a>
                            <a href={"https://tryhackme.com/r/room/agentsudoctf"}
                               className={"text-emerald-600 hover:underline m-1"}>[Agent
                                Sudo](https://tryhackme.com/r/room/agentsudoctf) </a>
                            <a href={"https://tryhackme.com/r/room/crackthehash"}
                               className={"text-emerald-600 hover:underline m-1"}>[Crack the
                                hash](https://tryhackme.com/r/room/crackthehash) </a>
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