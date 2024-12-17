import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""

const HeaderComponent: React.FC = () => {
    return (

        <div className={"items-center flex flex-row min-h-min bg-emerald-600"}>
            <Image src={BasePath + "/favicons/favicon-32x32.png"} alt={"icon"} className={"m-2"} width={30}
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
                <Link href={"/product"} className={"hover:underline"}>
                    Product
                </Link>
            </div>
        </div>

    )
}

export default HeaderComponent