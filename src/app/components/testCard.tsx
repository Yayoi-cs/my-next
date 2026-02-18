import React from "react";
import nextConfig from "../../../next.config.mjs";
import {FaFlag} from "react-icons/fa";

const BasePath = nextConfig.basePath || ""

export interface blogCardArgs {
    title: string;
    description: string[];
    link: string
}

const BlogCard: React.FC<blogCardArgs> = ({title, description, link}) => {
    const nav = () => {
        window.open(link, "_blank")
    }
    return (
        <div
            onClick={nav}
            className={"flex m-5 wrap-parent overflow-hidden flex-row w-4/5 max-h-40 lg:w-1/2 md:w-2/3 rounded-2xl shadow-2xl shadow-emerald-300 hover:shadow-2xl hover:shadow-emerald-800"}>
            <div className={"flex w-2/5 my-bg-wrap"}>
                <div className="hexagon-wrapper">
                    <div className="hexagon">
                        <FaFlag className={"text-black text-5xl self-center z-20 text-teal-300"}/>
                    </div>
                </div>
            </div>
            <div className={"flex relative w-3/5"}>
                <div className={"absolute flex-col h-full p-2 flex w-full z-0 justify-center"}>
                    {
                        <p className={"md:text-2xl text-xl font-bold text-white text-wrap overflow-hidden"}>{link}</p>
                    }
                </div>
                <div className={"absolute h-full flex wrap-right w-full z-10"}>
                    <div className={"flex mb:p-5 ps-2 flex-col justify-center"}>
                        <p className={"text-2xl font-bold text-emerald-600"}>{title}</p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .wrap-parent {
                        background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
                    }

                    .wrap-right {
                        background: white;
                        width: 100%;
                        transition: width 0.5s ease, transform 0.5s ease;
                    }

                    .wrap-parent:hover .wrap-right {
                        transform: translateX(100%);
                        overflow: hidden;
                    }

                    .hexagon-wrapper {
                        margin: auto;
                        display: flex;
                        text-align: initial;
                        width: 150px;
                        height: 150px;
                        cursor: pointer;
                    }

                    .hexagon {
                        position: relative;
                        width: 46%;
                        height: 80%;
                        margin: auto;
                        color: white;
                        //background: linear-gradient(-180deg, white,#99f6e4);
                        background: linear-gradient(-180deg, white, #ccfbf1);
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        transition: 0.5s;
                    }

                    .hexagon svg {
                        z-index: 1;
                        margin: auto;
                        font-size: 50px;
                        color: transparent;
                        fill: transparent;
                        background: linear-gradient(45deg, #a58fe9, #e37682);
                        background-clip: text;
                        -webkit-background-clip: text;
                    }

                    .hexagon:before,
                    .hexagon:after {
                        position: absolute;
                        content: "";
                        background: inherit;
                        height: 100%;
                        width: 100%;
                        border-radius: 0;
                        transition: 0.5s;
                        transform-origin: center;
                    }

                    .hexagon:before {
                        transform: rotateZ(60deg);
                    }

                    .hexagon:after {
                        transform: rotateZ(-60deg);
                    }

                    .wrap-parent:hover .hexagon {
                        border-radius: 50px;
                        transform: rotate(360deg);
                        transition: 0.5s;
                    }

                    .wrap-parent:hover .hexagon:before,
                    .wrap-parent:hover .hexagon:after {
                        border-radius: 50px;
                        transition: 0.5s;
                    }
                `}
            </style>
        </div>
    );
};

export default BlogCard;
