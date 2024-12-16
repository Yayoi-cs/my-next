import React from "react";
import nextConfig from "../../../next.config.mjs";
import Image from "next/image";
import {Base} from "next/dist/client/components/react-dev-overlay/internal/styles/Base";

const BasePath = nextConfig.basePath || ""

export interface blogCardArgs {
    title: string;
    image: string
    description: string[];
    link: string
}

const BlogCard: React.FC<blogCardArgs> = ({title, image, description, link}) => {
    const nav = () => {
        window.open(link,"_blank")
    }
    return (
        <div
            onClick={nav}
            className={"flex m-2 flex-row w-4/5 max-h-44 md:w-2/3 items-center rounded-2xl shadow-2xl shadow-emerald-300 hover:shadow-2xl hover:shadow-emerald-800"}>
            <div className={"flex w-2/5"}>
                <Image src={BasePath + image} alt={"img"} layout={"responsive"} width={200} height={100}
                       className={"rounded-l-2xl max-h-44"}/>
            </div>
            <div className={"flex flex-col p-5 w-3/5"}>
                <p className={"md:text-2xl text-2xl font-bold text-emerald-600"}>{title}</p>
                {
                    description.map((desc,index) => (
                        <p key={"ctf-description"+index.toString()+title} className={"md:text-xl text-xl overflow-hidden sm:block md:block hidden"}>{desc}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogCard;
