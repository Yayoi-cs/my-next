"use client";

import Link from "next/link";
import CTFCard from "@/app/components/ctfimagecard";
import HeaderComponent from "@/app/components/header"

export default function Home() {

    const ctfData = [
        {
            title: "0x1 PicoCTF2024",
            imgSrc: "/images/pico.png",
            altText: "pico image",
            participant: "Jp student solo",
            rank: "7th"
        },
        {
            title: "0x2 WaniCTF2024",
            imgSrc: "/images/wani.png",
            altText: "wani image",
            participant: "Team : SUSH1st",
            rank: "8th"
        },
        {
            title: "0x3 DiverOSINT CTF",
            imgSrc: "/images/diver.png",
            altText: "diver image",
            participant: "Team : UFO_TH_JP",
            rank: "10th"
        },
        {
            title: "0x4 CTF4B 2024",
            imgSrc: "/images/ctf4b.png",
            altText: "ctf4b image",
            participant: "Team : NITKC",
            rank: "28th"
        },
        {
            title: "0x5 N00BZCTF 2024",
            imgSrc: "/images/noobz.png",
            altText: "noobz image",
            participant: "Team : SUSH1st",
            rank: "32nd"
        },
        {
            title: "0x6 AlpacaHack test1",
            imgSrc: "/images/alpaca1.png",
            altText: "alpaca image",
            participant: "Solo @ k0080",
            rank: "17th"
        },
				{
            title: "0x7 IERAE CTF 2024",
            imgSrc: "/images/ierae.png",
            altText: "ierae image",
            participant: "Team : SUSH1st",
            rank: "4th"
        },
				{
            title: "0x8 JPN-UKR CTF",
            imgSrc: "/images/jpn-ukraina.jpg",
            altText: "jpn-ukraina image",
            participant: "Team : SUSH1st",
            rank: "5th"
        },
				{
            title: "0x8 AlpacaHack Round4",
            imgSrc: "/images/alpaca4.png",
            altText: "Alpaca4 image",
            participant: "Solo @ k0080",
            rank: "36th"
        },
				{
            title: "0x9 SECCON13",
            imgSrc: "/images/seccon13.png",
            altText: "seccon13 image",
            participant: "Team : ierae",
            rank: "2nd🥈"
        },

    ].reverse();

		//ctfData = ctfData.reverse()

    const badgeData = [
        {
            title: "7 day streak",
            imgSrc: "/images/k0080-badges-7-day-streak.png",
            altText: "pico image",
            participant: "",
            rank: "7 day streak"
        },
        {
            title: "Hash Cracker",
            imgSrc: "/images/k0080-badges-hash-cracker.png",
            altText: "wani image",
            participant: "",
            rank: "Hash Cracker"
        },
        {
            title: "OhSINT",
            imgSrc: "/images/k0080-badges-ohsint.png",
            altText: "diver image",
            participant: "",
            rank: "OhSINT"
        },
        {
            title: "cat linux.txt",
            imgSrc: "/images/k0080-badges-terminaled.png",
            altText: "ctf4b image",
            participant: "",
            rank: "cat linux.txt"
        }
    ];

    return (
        <>
            <div className={"bg-white flex flex-col items-center justify-center min-h-screen"}>
                <main className={"bg-white min-h-screen min-w-full"}>
                    <HeaderComponent />
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
                            {ctfData.map((ctf, index) => (
                                <CTFCard
									key={ctf.title}
                                    title={ctf.title}
                                    imgSrc={ctf.imgSrc}
                                    altText={ctf.altText}
                                    participant={ctf.participant}
                                    rank={ctf.rank}
                                />
                            ))}
                        </div>
                        <div className={"flex flex-col m-2"}>
                            <p className={"text-2xl"}>B3 A 1NT3ll3CTU41 H4CK3R -<a
                                href={"https://tryhackme.com/p/k0080"}
                                className={"text-emerald-600 hover:underline"}>THM</a>-</p>
                        </div>
                        <div className={"p-12 flex flex-col border-t-2 border-t-emerald-500"}>
                            <span className={"text-3xl bold text-emerald-600"}>0x1 Badges</span><br/><br/>
                            {badgeData.map((badge, index) => (
                                <CTFCard
                                    key={index}
                                    title={badge.title}
                                    imgSrc={badge.imgSrc}
                                    altText={badge.altText}
                                    participant={badge.participant}
                                    rank={badge.rank}
                                />
                            ))}
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
                            <a href={"https://tryhackme.com/r/room/hypervisorinternals"}
                               className={"text-emerald-600 hover:underline m-1"}>[Hypervisor 
															 Internals](https://tryhackme.com/r/room/hypervisorinternals) </a>
                             <a href={"https://tryhackme.com/r/room/hostedhypervisors"}
                               className={"text-emerald-600 hover:underline m-1"}>[Hosted 
															 Hypervisors](https://tryhackme.com/r/room/hostedhypervisors) </a>
                              <a href={"https://tryhackme.com/r/room/introtocoldsystemforensics"}
                               className={"text-emerald-600 hover:underline m-1"}>[Intro to Cold System 
															 Forensics](https://tryhackme.com/r/room/introtocoldsystemforensics) </a>
                               <a href={"https://tryhackme.com/r/room/forensicimaging"}
                               className={"text-emerald-600 hover:underline m-1"}>[Forensic 
															 Imaging](https://tryhackme.com/r/room/forensicimaging) </a>
 
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}
