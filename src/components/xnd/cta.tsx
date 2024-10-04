import Image from "next/image";
import Link from "next/link";

export default function Cta(
    { title, caption, imageUrl, order = "" }:
        { title: string; caption: string; imageUrl: string; order: string; }) {
    return (
        <div className="flex flex-col lg:flex-row justify-around gap-8 py-8 px-12">
            <div className={`self-center flex flex-col gap-4 lg:w-[419px]`}>
                <h2 className="text-2xl md:text-4xl font-[600]">{title}</h2>
                <p>{caption}</p>
                <Link
                    href="/login"
                    className="text-white py-2 px-4 w-fit lg:w-40 bg-main-primary lg:w-32 h-10 text-center flex items-center justify-center gap-2 hover:bg-opacity-90 rounded-3xl"
                >
                    Start here
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 8.5H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 4L13.5 8.5L9 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className={`relative bg-[#F0F5FA] px-12 pt-12 w-full lg:w-[557px] rounded-2xl flex justify-center ${order}`}>
                <div className="absolute group-lines-up -top-0 rotate-[0]"></div>
                <Image src={imageUrl} className="z-20" alt="" width={296} height={605} />
                <div className="absolute group-lines-down -bottom-[100px] lg:-bottom-[150px]"></div>
            </div>
        </div>
    )
}