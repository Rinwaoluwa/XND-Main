import Image from "next/image"

export default function GiftCards () {
    return (
        <div className="relative h-[300px] w-[300px]">
            <Image src="/assets/images/iTunes.svg" alt="XND App Preview" className="absolute" width={220} height={200} />
            <Image src="/assets/images/amazon.svg" alt="XND App Preview" className="absolute" width={300} height={300} />
            <Image src="/assets/images/google.svg" alt="XND App Preview" className="absolute left-12" width={300} height={300} />
            <Image src="/assets/images/netflix.svg" alt="XND App Preview" className="absolute left-16" width={300} height={300} />
        </div>
    )
}