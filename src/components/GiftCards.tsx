import { useEffect } from "react";
import Image from "next/image"
import { motion, useAnimation } from "framer-motion";

const GIFTCARDS = [
    "/assets/images/iTunes.svg",
    "/assets/images/amazon.svg",
    "/assets/images/google.svg",
    "/assets/images/netflix.svg"
]

export default function GiftCards() {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            skewY: -10,
            transformStyle: "preserve-3d",
            transition: {
                duration: 10,          // Animation duration in seconds
                ease: "easeInOut",
                repeat: Infinity,     // Repeat infinitely
                repeatType: "loop",   // Loop the animation without reversing
            },
        });
    }, [controls]);

    return (
        <div className="w-1/2">
            <motion.div
                animate={controls}
                style={{
                    transformOrigin: "center center",
                    perspective: 800,
                }}
                className="relative w-[477px]"
            >
                {GIFTCARDS.map((img: string, index: number) => (

                    <motion.div key={index}
                        className="absolute"
                        style={{
                            left: 48 * index, // Initial left position based on the index
                        }}
                        animate={{
                            left: [48 * index, 48 * 2], // Move from the initial `left` to `left: 48 * 2`
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <Image src={img} alt="Gift Card" width={index === 0 ? 300 : 400} height={index === 0 ? 250 : 400} />
                    </motion.div>
                ))}
                {/*
                <Image src="/assets/images/amazon.svg" alt="Amazon Card" className="absolute left-12" width={300} height={300} />
                <Image src="/assets/images/google.svg" alt="Google Card" className="absolute left-24" width={300} height={300} />
                <Image src="/assets/images/netflix.svg" alt="Netflix Card" className="absolute left-32" width={300} height={300} />
            */}
            </motion.div>
        </div >
    )
}