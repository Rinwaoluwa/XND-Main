"use client"

import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import Cta from '@/components/xnd/cta';
import { apartContent } from '@/fixtures/apart';
import Link from 'next/link';
import Faqs from '@/components/faqs';
import Footer from '@/components/footer';

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
            >
                <section
                    className='relative -z-30 w-full container-padding-x bg-black pt-12 landing-page-hero-image'
                    aria-labelledby='hero'
                    aria-describedby='hero section'
                >
                    <motion.img src="/assets/images/laptop-blur.png" className='absolute -z-20 top-44 left-4 lg:left-28'
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            ease: "easeInOut",
                            duration: 3,
                            repeat: Infinity,
                        }}
                    ></motion.img>
                    <motion.img src="/assets/images/trade-status.png" className='absolute -z-20 top-48 lg:top-2/4 right-0 lg:right-40'
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            ease: "easeInOut",
                            duration: 3,
                            repeat: Infinity,
                        }}
                    ></motion.img>
                    <Image src="/assets/icons/ellipse3.svg" alt="Ellipse" className='absolute -z-10 top-0 right-0 rotate-180' width={200} height={200} />
                    <Image src="/assets/icons/ellipse3.svg" alt="Ellipse" className='absolute -z-10 bottom-0 left-0' width={200} height={200} />
                    <div aria-describedby='CTA' className='relative z-10 w-full flex flex-col items-center gap-8'>
                        <h1 className="text-white text-center text-4xl md:text-6xl font-[600]">
                            Welcome to Exchange Next Door
                        </h1>
                        <p className="text-[#5F5F5F] text-center opacity-7">
                            A platform where you can securely trade your unused gift cards for cryptocurrency,
                            <br />
                            offering a seamless and secure transaction experience.
                        </p>
                        <Link
                            href="/login"
                            className="py-2 px-4 w-fit lg:w-40 bg-[#FBBD08] lg:w-32 h-10 text-center hover:opacity-70 rounded-3xl"
                        >
                            Get started
                        </Link>
                        <Image src="/assets/images/laptop.png" alt='XND Desktop Previwe' width={892} height={601} />
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

                <div className="flex flex-col gap-4 items-center py-8 px-12">
                    <h2 className="text-2xl md:text-4xl font-[600]">Start trading</h2>
                    <p>Begin the process of selling your gift cards for USDT on XND.</p>
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
                    <div className={`relative bg-[#F0F5FA] px-12 pt-12 w-[400px] lg:w-[60%] rounded-2xl flex justify-center`}>
                        <div className="absolute group-lines-1 -top-0"></div>
                        <Image src="/assets/images/laptop-2.png" className="z-20" alt="" width={700} height={445} />
                        <div className="absolute group-lines-2 -bottom-[100px] lg:-bottom-[120px]"></div>
                    </div>
                </div>
                <Faqs />
                <Footer />
            </motion.div>
        </AnimatePresence>
    )
}