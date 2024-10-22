import Image from "next/image";
import Link from "next/link";
import AnimatedLinkButton from "../animatedButton";

export default function Cta(
    { title, caption, imageUrl, order = "" }:
        { title: string; caption: string; imageUrl: string; order: string; }) {
    return (
        <div className="flex flex-col lg:flex-row justify-around gap-8 py-8 px-12">
            <div className={`self-center flex flex-col gap-4 lg:w-[419px]`}>
                <h2 className="text-2xl md:text-4xl font-[600]">{title}</h2>
                <p>{caption}</p>
                <AnimatedLinkButton href="https://xnd-frontend.vercel.app/auth/register">Start here</AnimatedLinkButton>
            </div>
            <div className={`relative bg-[#F0F5FA] px-12 pt-12 w-full lg:w-[557px] rounded-2xl flex justify-center ${order}`}>
                <div className="absolute group-lines-up -top-0 rotate-[0]"></div>
                <Image src={imageUrl} className="z-20" alt="" width={296} height={605} />
                <div className="absolute group-lines-down -bottom-[100px] lg:-bottom-[150px]"></div>
            </div>
        </div>
    )
}