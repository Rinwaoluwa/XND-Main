"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

const TCoin = () => (
    <svg width="300" height="300" viewBox="0 0 536 660" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="536" height="660" rx="48" fill="#26A17B" />
        <g clip-path="url(#clip0_6191_5459)">
            <path d="M268.5 476C349.41 476 415 410.41 415 329.5C415 248.59 349.41 183 268.5 183C187.59 183 122 248.59 122 329.5C122 410.41 187.59 476 268.5 476Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M286.098 342.166V342.148C285.09 342.221 279.899 342.532 268.316 342.532C259.068 342.532 252.558 342.258 250.269 342.148V342.175C214.67 340.61 188.098 334.411 188.098 326.994C188.098 319.587 214.67 313.388 250.269 311.795V336.004C252.595 336.169 259.261 336.562 268.472 336.562C279.523 336.562 285.063 336.105 286.098 336.013V311.813C321.624 313.397 348.131 319.596 348.131 326.994C348.131 334.411 321.624 340.591 286.098 342.166ZM286.098 309.295V287.631H335.669V254.596H200.697V287.631H250.269V309.286C209.982 311.136 179.684 319.12 179.684 328.679C179.684 338.238 209.982 346.213 250.269 348.072V417.495H286.098V348.054C326.321 346.204 356.546 338.229 356.546 328.679C356.546 319.129 326.321 311.154 286.098 309.295Z" fill="#26A17B" />
        </g>
        <defs>
            <clipPath id="clip0_6191_5459">
                <rect width="293" height="293" fill="white" transform="translate(122 183)" />
            </clipPath>
        </defs>
    </svg>
)

const Naira = () => (
    <svg width="300" height="300" viewBox="0 0 536 660" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_6199_4312)">
            <rect width="536" height="660" rx="48" fill="#072F54" />
            <g clip-path="url(#clip1_6199_4312)">
                <path d="M268.5 476C349.41 476 415 410.41 415 329.5C415 248.59 349.41 183 268.5 183C187.59 183 122 248.59 122 329.5C122 410.41 187.59 476 268.5 476Z" fill="white" />
                <path d="M321.534 321.27V331.777H214.364V321.27H321.534ZM321.534 343.965V354.472H214.364V343.965H321.534ZM312.971 281.974V389.564H293.323L246.568 321.848H245.727V389.564H223.032V281.974H242.943L289.435 349.638H290.328V281.974H312.971Z" fill="#072F54" />
            </g>
            <circle cx="27" cy="623" r="121" fill="#0E3E6A" />
            <circle cx="519" cy="37" r="121" fill="#0E3E6A" />
        </g>
        <defs>
            <clipPath id="clip0_6199_4312">
                <rect width="536" height="660" rx="48" fill="white" />
            </clipPath>
            <clipPath id="clip1_6199_4312">
                <rect width="293" height="293" fill="white" transform="translate(122 183)" />
            </clipPath>
        </defs>
    </svg>
)

const currencies = [
    { symbol: <Naira />, color: '#002D74' },
    { symbol: <TCoin />, color: '#26A17B' },
    { symbol: <TCoin />, color: '#26A17B' },
    { symbol: <TCoin />, color: '#26A17B' },
]

const Card = ({ symbol, color, animate, className }) => (
    <div className={className}>
        {symbol}
    </div>
// <motion.div
//     className="w-20 h-28 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
//     style={{ backgroundColor: color }}
//     animate={animate}
// >
//     <motion.div
//         className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
//         style={{ color }}
//     >
//         {symbol}
//     </motion.div>
// </motion.div>
)

export default function Currencies() {
    const [cards, setCards] = useState(currencies)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCards(prevCards => [...prevCards.slice(1), prevCards[0]])
    //     }, 2000)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <div className="relative w-full h-[300px]">

            <div className="absolute w-full h-[300px]">
                {cards.map((currency, index) => (
                    <Card
                        key={`${currency.symbol}-${index}`}
                        symbol={currency.symbol}
                        color={currency.color}
                        animate={{
                            x: [0, 40, 40, 0],
                            y: [index * 32, index * 32, (index + 1) * 32, (index + 1) * 32],
                            transition: {
                                duration: 2,
                                times: [0, 0.4, 0.6, 1],
                                repeat: Infinity,
                                repeatDelay: (currencies.length - 1) * 2,
                            },
                        }}
                        className={`absolute ${index === 0 ? "right-0" : `right-[${index * 150}px]`}`}
                    />
                ))}
            </div>
        </div>
    )
}



