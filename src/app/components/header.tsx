import Link from "next/link";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

const BasePath = nextConfig.basePath || ""

const HeaderComponent: React.FC = () => {
    return (

        <div className={"items-center absolute z-10 flex w-full  flex-row min-h-min bg-emerald-600/90 rounded-b-2xl"}>
            <Image src={BasePath + "/favicons/favicon-32x32.png"} alt={"icon"} className={"m-2"} width={30}
                   height={30}/>
            <div className={"p-4 rounded-3xl text-white"}>
                <Link href={"/home"} className={"hover:underline"}>
                    Home
                </Link>
            </div>
            <div className={"p-4 rounded-3xl text-white"}>
                <Link href={"/whoami"} className={"hover:underline"}>
                    whoami
                </Link>
            </div>
        </div>

    )
}

export default HeaderComponent