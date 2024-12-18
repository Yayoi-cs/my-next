import React from "react";
import nextConfig from "../../../next.config.mjs";
const BasePath = nextConfig.basePath || ""

interface CTFCardProps {
    title: string;
    imgSrc: string;
    altText: string;
    participant: string;
    rank: string;
}

const CTFCard: React.FC<CTFCardProps> = ({title, imgSrc, altText, participant, rank}) => {
    return (
        <div className={"flex flex-col"}>
            <span className={"text-3xl text-emerald-600"}>{title}</span>
            <br/>
            <div className={"flex md:flex-row flex-col md:items-center"}>
                <img
                    src={BasePath+imgSrc}
                    alt={altText}
                    className={"md:w-1/2 w-4/5 shadow-emerald-300 shadow-2xl"}
                />
                <div className={"flex flex-col md:items-center flex-row md:m-5 p-5 md:border-l-2 md:border-t-0 border-l-emerald-600"}>
                    {participant !== "" ? (
                            <p className={"md:text-2xl text-xl"}>{participant}</p>
                        )
                        : null
                    }
                    <p className={"text-emerald-600 md:text-4xl text-xl"}>Rank: {rank}</p>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default CTFCard;
