"use client"

import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import Cta from '@/components/xnd/cta';
import { apartContent } from '@/fixtures/apart';
import Link from 'next/link';
import Faqs from '@/components/faqs';
import Footer from '@/components/footer';
import AnimatedLinkButton from '@/components/animatedButton';

const pageAnimationVariant = {
    initial: {
        y: -500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: [0, .5, 1],
        transition: {
            ease: "linear",
            duration: 1.5,
        }
    }
}

export default function XndApp() {
    return (
        <AnimatePresence>
            <motion.div
                aria-describedby="XnD Web App"
                variants={pageAnimationVariant}
                initial="initial"
                animate="animate"
                className="overflow-x-hidden"
            >
                <section
                    className='relative -z-30 w-full px-4 sm:px-6 lg:px-8 bg-black landing-page-hero-image'
                    aria-labelledby='hero'
                    aria-describedby='hero section'
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.img src="/assets/images/laptop-blur.png" className='absolute -z-20 top-1/4 left-4 lg:left-28 w-1/4 max-w-xs'
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                ease: "easeInOut",
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />
                        <motion.img src="/assets/images/trade-status.png" className='absolute -z-20 top-1/3 right-0 lg:right-40 w-1/4 max-w-xs'
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                ease: "easeInOut",
                                duration: 3,
                                repeat: Infinity,
                            }}
                        />
                        <Image src="/assets/icons/ellipse3.svg" alt="Ellipse" className='absolute -z-10 top-0 right-0 rotate-180 w-1/4 max-w-xs' width={200} height={200} />
                        <Image src="/assets/icons/ellipse3.svg" alt="Ellipse" className='absolute -z-10 bottom-0 left-0 w-1/4 max-w-xs' width={200} height={200} />
                    </div>
                    <div aria-describedby='CTA' className='relative z-10 flex flex-col items-center min-h-screen pt-20 pb-10'>
                        <div className="flex-grow flex flex-col items-center justify-center gap-8 w-full max-w-4xl">
                            <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                                Welcome to Exchange Next Door
                            </h1>
                            <p className="text-[#5F5F5F] text-center opacity-7 text-sm sm:text-base md:text-lg max-w-3xl">
                                A platform where you can securely trade your unused gift cards for cryptocurrency,
                                offering a seamless and secure transaction experience.
                            </p>
                            <Link
                                href="https://xnd-frontend.vercel.app/auth/login"
                                className="py-2 px-4 w-fit bg-[#FBBD08] text-center hover:opacity-70 rounded-3xl text-sm sm:text-base"
                            >
                                Get started
                            </Link>
                        </div>
                        <div className="w-full max-w-4xl mt-auto">
                            <Image 
                                src="/assets/images/laptop.png" 
                                alt='XND Desktop Preview' 
                                width={892} 
                                height={601} 
                                layout="responsive"
                                className="transform translate-y-10"
                            />
                        </div>
                    </div>
                </section>
                {apartContent.map((content, index: number) => (
                    <Cta
                        key={index}
                        title={content.title}
                        caption={content.caption}
                        imageUrl={content.imageUrl}
                        order={!(index % 2 === 0) ? "order-first !bg-[#F6E7B1]" : ""}
                    />
                ))}

                <div className="flex flex-col gap-4 items-center py-8 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center">Start trading</h2>
                    <p className="text-center text-sm sm:text-base">Begin the process of selling your gift cards for USDT on XND.</p>
                    <AnimatedLinkButton href="/login">Start here</AnimatedLinkButton>
                    <div className={`relative bg-[#F0F5FA] px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 w-full max-w-4xl rounded-2xl flex justify-center`}>
                        <div className="absolute group-lines-1 -top-0"></div>
                        <div className="w-full max-w-3xl">
                            <Image src="/assets/images/laptop-2.png" className="z-20" alt="" width={700} height={445} layout="responsive" />
                        </div>
                        <div className="absolute group-lines-2 -bottom-[60px] sm:-bottom-[80px] lg:-bottom-[120px]"></div>
                    </div>
                </div>
                <Faqs />
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}