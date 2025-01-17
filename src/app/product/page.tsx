"use client"

import HeaderComponent from "@/app/components/header";
import BlogCard from "@/app/components/blogCard";
import {productData} from "@/app/product/productData";


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
                        {productData.map((data,index) => (
                            <BlogCard key={"productData_"+data.title} title={data.title} image={data.image} description={data.description} link={data.link}/>
                        ))}
                    </div>
                </main>
            </div>
        </>

    )
}
