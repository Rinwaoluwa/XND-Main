"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { TITLE } from '@/fixtures/features';
import useMediaQuery from '@/hooks/useMediaQuery';


export default function CTA() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1);
  const isSmallMobile = useMediaQuery(360);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex === TITLE.length - 1) {
          setDirection(-1)
          return prevIndex - 1
        } else if (prevIndex === 0 && direction === -1) {
          setDirection(1)
          return prevIndex + 1
        } else {
          return prevIndex + direction
        }
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [direction])

  return (
    <div className="flex items-center justify-center bg-gray-100 mt-2">
      <div className="relative min-h-10 md:min-h-14 lg:min-h-20 w-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ y: direction > 0 ? 200 : (currentIndex === TITLE.length - 1 ? 0 : -200), display: 'block' }}
            animate={{ y: 0, display: 'block' }}
            exit={{
              y: direction > 0
                ? (currentIndex === TITLE.length - 1 ? 200 : -200)
                : 200,
              display: 'none'
            }}
            transition={{ duration: .5 }}
            className={`absolute left-0 inset-0 flex items-center justify-center ${isSmallMobile ? "text-base" : ""} text-4xl md:text-5xl lg:text-6xl text-[#D4A100] text-center font-bold w-full`}
          >
            {TITLE[currentIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  )
}
