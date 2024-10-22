import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import useMediaQuery from "@/hooks/useMediaQuery";

const GIFTCARDS = [
    "/assets/images/iTunes.svg",
    "/assets/images/amazon.svg",
    "/assets/images/google.svg",
    "/assets/images/netflix.svg"
]

export default function GiftCardSection() {
    const isMobile = useMediaQuery(558);

  return (
    <div className="w-full md-lg:w-1/2 overflow-hidden flex flex-col items-center md-lg:items-start">
      <div className="h-[330px] md-lg:h-[320px] w-full relative">
        <motion.div
          className="absolute xs:left-[5%] md:left-[20%] md-lg:left-0 top-0 md-lg:top-[40px] w-full h-full flex items-start justify-start"
          style={{
            transform: 'translateX(-50%)',
            left: isMobile ? "-10%" : 0
          }}
          animate={{
            rotateZ: [
              `-10deg`,
              `-15deg`,
              `-15deg`,
              `-15deg`,
              `0deg`,
              `0deg`,
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          {GIFTCARDS.map((src, index) => (
            <motion.div
              key={index}
              className={`absolute h-[400px] transition-all ${index === 0 ? "top-[-65px]" : ""}`}
              style={{
                zIndex: GIFTCARDS.length + index,
                width: index === 0 ? "300px" : "390px",
                transformOrigin: "center",
                scale: isMobile ? (index === 0 ? .9 : 1) : (index === 0 ? 1.19 : 1.2)
              }}
              animate={{
                translateX: [
                  `${index * 40}px`,
                  `${index * 70}px`,
                  `${index * 70}px`,
                  `${index * 40}px`,
                  `${index * 40}px`,
                  `${index * 40}px`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
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
      <h2 className="text-3xl font-bold text-center md-lg:text-left mt-12 mb-2">
        Buy & Sell Gift Cards
      </h2>
      <p className="text-center md-lg:text-left text-gray-600 max-w-md">
        Trade your gift cards with secured merchants looking to buy,
        and get payment in USDT in no time!
      </p>
    </div>
  );
}