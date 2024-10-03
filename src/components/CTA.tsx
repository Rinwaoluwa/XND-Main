"use client"

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { TITLE } from '@/fixtures/features';
import { useTextAnimation } from '@/hooks/useTextAnimation';

const ANIMATION_DURATION = 0.3;
const ANIMATION_DELAY = 0.3;
const HOLD_DURATION = 4000;


export default function CTA() {
    let currentElementIndex = 0;;
    const { animateText, activeIndex,setAnimateText } = useTextAnimation(currentElementIndex);
    return (
        <div>
        {/* <AnimatePresence>
        {TITLE.map((title, index) => {
          const LAST_ELEMENT = index === TITLE.length - 1;

          return (
            // visibleItems.includes(index) && (
            <motion.h1
              key={title}
              className="text-4xl md:text-6xl font-bold text-[#D4A100] my-4 w-screen"
              variants={{
                initial: {
                  y: index === 0 ? 0 : 200,
                  transition: {
                    duration: .2,
                  },
                },
                show: {
                  y: 0,
                  transition: {
                    duration: .3,
                    delay: index * .3,
                  },
                },
                hide: {
                  y: LAST_ELEMENT ? 0 : -50,
                  display: LAST_ELEMENT ? "block" : "none",
                  transition: {
                    duration: .3,
                    delay: index * .3,
                    ease: "linear",
                    display: { delay: index * .6, duration: .2 }
                  },
                },
                reverse: {
                  y: index === 0 ? 0 : 200,
                  display: index === 0 ? "block" : "none",
                  transition: {
                    duration: .4,
                    delay: (TITLE.length - index - 1) * .4,
                    ease: "linear",
                    display: { delay: index * .4, duration: .1 }
                  },
                },
              }}
              initial="initial"
              animate={animateText}
              onAnimationComplete={() => {
                setTimeout(() => setAnimateTextCycle(2), 4000)
              }}
              exit="reverse"
            >
              {title}
            </motion.h1>
            // )
          )
        })}
      </AnimatePresence> */}
          <AnimatePresence>
            <div className='w-screen h-[100px] top-0 py-4 relative'>
              {TITLE.map((title, index) => {
                currentElementIndex = index;
                const isActive =
                  (animateText === 'show' && index <= activeIndex) ||
                  (animateText === 'reverse' && index <= activeIndex) ||
                  (animateText === 'hide' && index === activeIndex)

                return (
                  <motion.h1
                    key={title}
                    className="text-4xl md:text-6xl font-bold text-[#D4A100] text-center w-screen absolute"
                    variants={{
                      initial: {
                        y: 200,
                        // opacity: 0,
                      },
                      show: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: ANIMATION_DURATION,
                          delay: index * ANIMATION_DELAY,
                        },
                      },
                      hide: {
                        y: -50,
                        opacity: 0,
                        transition: {
                          duration: ANIMATION_DURATION,
                          delay: (TITLE.length - index - 1) * ANIMATION_DELAY,
                        },
                      },
                      reverse: {
                        y: 0,
                        opacity: 0,
                        transition: {
                          duration: ANIMATION_DURATION,
                          delay: index * ANIMATION_DELAY,
                        },
                      },
                    }}
                    initial="initial"
                    animate={isActive ? animateText : 'initial'}
                  >
                    {title}
                  </motion.h1>
                )
              })}
            </div>
          </AnimatePresence>
        </div>
    )
}