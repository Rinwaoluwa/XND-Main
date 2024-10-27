
"use client"

import React from 'react';
import Link from 'next/link'
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import Testimonials from "@/components/Testimonials";
import Faqs from "@/components/faqs";
import Footer from '@/components/footer';
import CTA from '@/components/CTA';
import AnimatedLinkButton from '@/components/animatedButton';
import Currencies from '@/components/Currencies';
import GiftCards from '@/components/GiftCards';
import { useMerchantForm } from '@/lib/context/MerchantFormContext';


export default function Home() {
  const isMobile = useMediaQuery(992);
  const isSmallMobile = useMediaQuery(360);

  const { handleShowMerchantForm } = useMerchantForm();

  return (
    <>
      <main aria-describedby='home page' className='bg-p-50'>
        <section
          className='container-padding-x pt-12 landing-page-hero-image'
          aria-labelledby='hero'
          aria-describedby='hero section'
        >
          <div className="flex flex-col items-center text-center mb-12">
            <div className='flex items-center gap-4'>
              <Image
                src={`/assets/images/Avatars.svg`}
                alt={`User avatars`}
                width={200}
                height={200}
              />
              <div className='flex flex-col items-start'>
                <span className='flex gap-2'>
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={`/assets/icons/star.svg`}
                      alt="Ratings"
                      width={12}
                      height={12}
                    />
                  ))}
                </span>
                <p className="text-sm text-gray-600">Rated 4.9/5 by 5000+ users</p>
              </div>
            </div>
            <h1 className={`text-blue font-bold ${isSmallMobile ? "text-[18px]" : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"}`}>
              Trade gift cards securely,
            </h1>
            {/* TEXT ANIMATION */}
            <CTA />
            <p className={`${isSmallMobile ? "text-[15px]": "text-xl"} text-gray-600 max-w-2xl`}>
              Got unused gift cards? Don&apos;t let them gather dust — trade them for cryptocurrency
              today. Secure, simple, and profitable!
            </p>
          </div>
          <div className={`flex gap-4 mb-8  items-center ${isMobile ? "flex-col" : "justify-center"}`}>
            <Link
              href="/xnd-app"
              className="text-white bg-main-primary px-2 py-6 w-44 h-10 text-center flex items-center justify-center gap-1 hover:bg-opacity-90 rounded-3xl"
            >
              Get started
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 8.5H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 4L13.5 8.5L9 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button onClick={() => handleShowMerchantForm(true)} className="bg-white border border-g-400 text-p-400 px-6 py-3 rounded-3xl hover:bg-g-200 transition duration-300">
              Sign up for XND Merchant program
            </button>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className={isMobile ? "" : 'ellipse-container-image flex justify-center pt-12'}>
              <Image src="/assets/images/preview.png" alt="XND App Preview" width={800} height={400} />
            </div>
            <div className="absolute -bottom-10 gradient-1 h-[70px] w-full z-10"></div>
            <div className="absolute -bottom-10 gradient-2 h-[70px] w-full z-10"></div>
          </div>
          <h2 className="text-3xl font-bold text-center mt-12 mb-2">Discover how XND works</h2>
          <p className="text-center text-gray-600">Users on the platform adhere to certain preferences - let&apos;s show you.</p>
          <div className="flex flex-col lg:flex-row justify-between py-12 w-full">
            <GiftCards />
            <Currencies />
          </div>
          <div className='flex justify-center items-center mb-8'>
            <Link
              href="/xnd-app"
              className="text-white bg-main-primary px-4 lg:px-2 py-6 h-10 w-[251px] text-center flex items-center justify-center gap-1 hover:bg-opacity-90 rounded-3xl"
            >
              Explore how XND works
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 8.5H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 4L13.5 8.5L9 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>

        <section className="bg-main-primary text-white py-20">
          <div className="container mx-auto px-4 flex flex-col justify-center items-center">
            <div className='w-[70%]'>
              <h2 className="text-3xl font-bold text-center mb-4">Get started in minutes</h2>
              <p className="text-center mb-12">Create your account, choose the service you need — whether it&apos;s trading gift cards, converting USDT, or exchanging currency — and complete your transaction in just a few simple steps.</p>
            </div>
            <div className={`relative z-20 bg-[#F6E7B5] h-[472px] w-[70%] rounded-3xl px-8 pt-8 flex ${isMobile ? "flex-col" : "flex-row"} justify-between overflow-hidden`}>
              <Image src="/assets/icons/ellipse-bg.svg" alt="Ellipse" className='absolute -z-10 top-0 right-0 rotate-180' width={200} height={200} />
              <Image src="/assets/icons/ellipse-bg.svg" alt="Ellipse" className='absolute -z-10 bottom-0 left-0' width={200} height={200} />
              <div className={`self-center ${isMobile ? "mb-8" : "w-1/2 mb-0"}`}>
                <div>
                  <h2 className="text-2xl md:text-3xl font-[600] text-main-primary mb-4">Let&apos;s get you started</h2>
                  <p className="text-[#414141] text-sm md:text-lg mb-6">Our customers love the simplicity and security of trading with us.</p>
                  <AnimatedLinkButton href="/register">
                    Go to app
                  </AnimatedLinkButton>
                </div>
              </div>
              <Image src="/assets/images/xnd-preview.png" className='self-end' alt="XND App" width={450} height={900} />
            </div>
          </div>
        </section>

        <Testimonials />
        <Faqs />
        <Footer />
      </main>
    </>
  )
}
