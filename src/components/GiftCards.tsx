import Image from "next/image"
import { motion } from "framer-motion";

const GIFTCARDS = [
    "/assets/images/iTunes.svg",
    "/assets/images/amazon.svg",
    "/assets/images/google.svg",
    "/assets/images/netflix.svg"
]

export default function GiftCards() {

    return (
        <div className="w-1/2">
            {/* <div className="h-[310px] mx-auto perspective-1500"> */}
            <div className="h-[310px] mx-auto">
                <motion.div
                    className="relative w-full h-full flex items-start justify-start"
                    style={{ transformStyle: 'preserve-3d', transformOrigin: "center" }}
                    animate={{
                        rotate: [0, -10, 0], // Reduced angle for subtelty
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5, // Smooth and slow
                        ease: "easeInOut",
                        repeatType: "reverse",
                      }}
                >
                    {GIFTCARDS.map((src, index) => (
                        <motion.div
                            key={index}
                            className="absolute h-[400px] transition-all ease-out"
                            style={{
                                zIndex: GIFTCARDS.length - index,
                                width: index === 0 ? "300px" : "390px",
                                transform: `translateX(${index * 40}px) translateY(${index === 0 ? "-30" : index * -10}px) translateZ(${index * 60}px) rotateX(${10 + index * 5}deg) rotateY(${30 + index * 2}deg) rotateZ(${-5 - index * 2}deg)`,
                                transformOrigin: "center",
                                scale: 1.2,
                            }}
                            // initial={{
                            //     transform: `translateX(${index * 40}px) translateY(${index === 0 ? "-30" : index * -10}px) translateZ(${index * 60}px) rotateX(${10 + index * 5}deg) rotateY(${30 + index * 2}deg) rotateZ(${-5 - index * 2}deg)`
                            // }}
                            animate={{transform: `translateX(${index * 80}px) translateY(${index === 0 ? "-30" : index * -10}px) translateZ(${index * 60}px) rotateX(${10 + index * 5}deg) rotateY(${30 + index * 2}deg) rotateZ(${-5 - index * 2}deg)`,
                                // transform: [
                                //     `translateX(${80}px) translateY(${-10}px) translateZ(${60}px) rotateX(${10 * 5}deg) rotateY(${30 +2}deg) rotateZ(${-5 * 2}deg) scale(1.2)`,
                                //     `translateX(${40}px) translateY(${-10}px) translateZ(${60}px) rotateX(${10 + 5}deg) rotateY(${30 +2}deg) rotateZ(${-5 * 2}deg) scale(1.2)`
                                // ],
                                // transformOrigin: "bottom right"
                            }}
                            transition={{
                                duration: 2, // Sync duration with the parent
                                // delay: 1.5, // Stagger animations smoothly
                                ease: 'linear', // Smooth easing for child elements
                                repeat: Infinity,
                                // repeatDelay: 2, // Sync repeat delay with parent
                                // repeat: 1000,
                                repeatType: "loop"
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Gift Card ${index + 1}`}
                                layout="fill"
                                objectFit="contain"
                                priority={index === 0}
                            />
                        </motion.div>
                    ))}
                </motion.div>

            </div>
            <h2 className="text-3xl font-bold text-center lg:text-left mt-12 mb-2">Buy & Sell Gift Cards</h2>
            <p className="text-center lg:text-left text-gray-600">Trade your gift cards with secured merchants looking to buy,
                <br /> and get payment in USDT in no time!
            </p>
        </div>
    )
}
