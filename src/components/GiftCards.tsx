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
  const isMobile = useMediaQuery(768);
  const isSmallMobile = useMediaQuery(360);

  return (
    <div className="w-full overflow-hidden flex flex-col items-center px-4 md:px-0">
      <div className="h-[250px] sm:h-[300px] md:h-[320px] w-full relative">
        <motion.div
          className="absolute md:left-[-130px] top-0 md:top-[34px] w-full h-full flex items-start justify-center"
          animate={{
            rotateZ: [
              `-10deg`,
              `-15deg`,
              `-15deg`,
              `-15deg`,
              `-15deg`,
              `0deg`,
              `0deg`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          }}
        >
          {GIFTCARDS.map((src, index) => (
            <motion.div
              key={index}
              className={`absolute transition-all ${index === 0 ? "top-[-20px]" : ""}`}
              style={{
                zIndex: index,
                width: isSmallMobile ? (index === 0 ? "200px" : "250px") :
                  isMobile ? (index === 0 ? "210px" : "250px") :
                    (index === 0 ? "300px" : "390px"),
                height: isSmallMobile ? "200px" :
                  isMobile ? "300px" : "400px",
                transformOrigin: "center",
                scale: isSmallMobile ? (index === 0 ? 0.9 : 1.1) :
                  isMobile ? (index === 0 ? 1 : 1.15) :
                    (index === 0 ? 1.19 : 1.2)
              }}
              animate={{
                translateX: [
                  `${index * (isSmallMobile ? 15 : isMobile ? 20 : 40)}px`,
                  `${index * (isSmallMobile ? 25 : isMobile ? 35 : 70)}px`,
                  `${index * (isSmallMobile ? 25 : isMobile ? 35 : 70)}px`,
                  `${index * (isSmallMobile ? 15 : isMobile ? 20 : 40)}px`,
                  `${index * (isSmallMobile ? 15 : isMobile ? 20 : 40)}px`,
                  `${index * (isSmallMobile ? 15 : isMobile ? 20 : 40)}px`,
                  `${index * (isSmallMobile ? 15 : isMobile ? 20 : 40)}px`,
                ],
              }}
              transition={{
                duration: 4,
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
      <h2 className="text-2xl sm:text-3xl font-bold text-center md:text-left mt-8 sm:mt-12 mb-2">
        Buy & Sell Gift Cards
      </h2>
      <p className="text-sm sm:text-base text-center text-gray-600 max-w-md mx-auto md:mx-0">
        Trade your gift cards with secured merchants looking to buy,
        and get payment in USDT in no time!
      </p>
    </div>
  );
}