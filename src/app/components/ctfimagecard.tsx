import React from "react";
import nextConfig from "../../../next.config.mjs";
const BasePath = nextConfig.basePath || ""

interface CTFCardProps {
    title: string;
    imgSrc: string;
    altText: string;
    participant: string;
    rank: string;
    description: string;
}

const CTFCard: React.FC<CTFCardProps> = ({title, imgSrc, altText, participant, rank,description}) => {
    return (
        <div>
            <span className={"text-3xl text-emerald-600"}>{title}</span>
            <br/>
            <br/>
            <div className={"flex flex-row items-center"}>
                <img
                    src={BasePath+imgSrc}
                    alt={altText}
                    className={"ctf-img shadow-emerald-300 shadow-2xl"}
                />
                <div className={"flex flex-col m-5 p-5 border-l-2 border-l-emerald-600"}>
                    {participant !== "" ? (
                            <p className={"text-2xl"}>{participant}</p>
                        )
                        : null
                    }
                    <p className={"text-emerald-600 text-4xl"}>{rank}</p>
                    {description !== "" ? (
                            <p className={"text-xl"}>{participant}</p>
                        )
                        : null
                    }
                </div>
            </div>
            <br/>
            <br/>
            <br/>
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
        </div>
    );
};

export default CTFCard;
