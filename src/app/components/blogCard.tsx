import React from "react";
import nextConfig from "../../../next.config.mjs";
import Image from "next/image";
import {Base} from "next/dist/client/components/react-dev-overlay/internal/styles/Base";

const BasePath = nextConfig.basePath || ""

export interface blogCardArgs {
    title: string;
    description: string[];
    link: string
}

const BlogCard: React.FC<blogCardArgs> = ({title, description, link}) => {
    const nav = () => {
        window.open(link,"_blank")
    }
    return (
        <div
            onClick={nav}
            className={"flex m-5 overflow-hidden flex-row w-4/5 max-h-40 lg:w-1/2 md:w-2/3 items-center rounded-2xl shadow-2xl shadow-emerald-300 hover:shadow-2xl hover:shadow-emerald-800"}>
            <div className={"flex w-2/5 object-cover overflow-hidden"}>
            </div>
            <div className={"flex mb:p-5 ps-2 flex-col w-3/5"}>
                <p className={"md:text-2xl text-lg md:font-bold text-emerald-600"}>{title}</p>
                {
                    description.map((desc,index) => (
                        <p key={"ctf-description"+index.toString()+title} className={"md:text-xl overflow-hidden sm:block md:block hidden"}>{desc}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogCard;
