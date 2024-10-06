"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image'

const testimonials = [
    {
        name: 'Gbenga Karim',
        image: '/assets/images/support-agent.png',
        text: 'I had some unwanted gift cards lying around, and this app made it so easy to sell them. The process was straightforward and I got paid quickly. Plus, the app offers competitive payout rates, so we can purchase gift cards at a fair price.'
    },
    {
        name: 'Kayode Ugo',
        image: '/assets/images/support-agent.png',
        text: 'This app has made it so easy for my business to buy gift cards from customers. The interface is user-friendly and the process is very direct. Plus, the app offers competitive payout rates, so we can purchase gift cards at a fair price.'
    },
    {
        name: 'Christian C. Chukwu',
        image: '/assets/images/support-agent.png',
        text: 'I was a little hesitant to sell my gift cards online, but this app made me feel confident and secure throughout the process. The app offers a great interface and a fast payout, so you can get cash for your gift cards in no time.'
    }
]

export default function Testimonials() {
    const isMobile = useMediaQuery(992);

    const [width, setWidth] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const controls = useAnimation()

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
        }
    }, [])

    useEffect(() => {
        const animateCarousel = async () => {
            await controls.start({
                x: -width,
                transition: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                },
            })
        }

        if (width > 0 && !isMobile) {
            animateCarousel()
        }
    }, [controls, width, isMobile])

    const handleMouseEnter = () => controls.stop()
    const handleMouseLeave = () => controls.start({ x: -width, transition: { duration: 10, ease: "linear", repeat: Infinity } })

    return (
        <section className="py-8 overflow-hidden">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-bold text-center mb-2">What are people saying about us</h2>
                <p className="text-center text-sm text-gray-600 mb-12">Our customers love the simplicity and security of trading with us.</p>
                <div className="relative w-screen">
                    {!isMobile && <div className="absolute top-0 left-0 gradient-3 h-full w-[150px] z-10"></div>}
                    <motion.div
                        ref={carouselRef}
                        className="flex"
                        style={{ x }}
                        animate={controls}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <motion.div
                                key={`${testimonial.name}-${index}`}
                                className="bg-white flex flex-col items-center justify-center gap-4 px-6 h-[328px] rounded-2xl shadow-md mr-8 flex-shrink-0"
                                style={{ width: isMobile ? '100%' : '384px' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="flex flex-col items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full mr-4"
                                />
                                <h3 className="font-semibold">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600 text-center text-sm">{testimonial.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    {!isMobile && <div className="absolute top-0 right-0 gradient-4 h-full w-[150px] z-10"></div>}
                </div>
            </div>
        </section>
    )
}