import { useEffect, useState } from "react"

export function useTextAnimation(currentElementIndex: number) {
    const [animateText, setAnimateText] = useState<'show' | 'hide' | 'reverse'>('show')
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        let timer: NodeJS.Timeout
        // if (animateText === 'show') {
        //   if (activeIndex > TITLE.length) {
        //     setAnimateText('reverse');
        //   } else {
        //     activeIndex === currentElementIndex && setAnimateText("hide");
        //     timer = setTimeout(() => {
        //       setActiveIndex(prevIndex => prevIndex + 1)
        //     }, ANIMATION_DELAY * 1000)
        //   }
        // } else if (animateText === 'reverse') {
        //   if (activeIndex < 0) {
        //     setAnimateText('show');
        //     // timer = setTimeout(() => {
        //       //   setActiveIndex(prevIndex => prevIndex + 1)
        //       // }, ANIMATION_DELAY * 1000)
        //     } else {
        //       timer = setTimeout(() => {
        //         setActiveIndex(prevIndex => prevIndex - 1)
        //     }, ANIMATION_DELAY * 1000)
        //   }
        // }

        console.log("text animation: ", animateText, activeIndex, currentElementIndex)


        // if (animateText === 'show') {
        //   if (activeIndex < TITLE.length - 1) {
        //     timer = setTimeout(() => {
        //       const intervalTime = setInterval(() => {
        //         if (animateText === "hide") {
        //           setAnimateText('show')
        //         }
        //         setAnimateText('hide');
        //       }, 2000);
        //       setActiveIndex(prevIndex => prevIndex + 1);
        //       return () => clearInterval(intervalTime);
        //     }, ANIMATION_DELAY * 1000)
        //   }
        // else {
        //   timer = setTimeout(() => {
        //     setAnimateText('hide')
        //   }, HOLD_DURATION)
        // }
        // }
        // else if (animateText === 'hide') {
        //   if (activeIndex > 0) {
        //     timer = setTimeout(() => {
        //       setActiveIndex(prevIndex => prevIndex - 1)
        //     }, ANIMATION_DELAY * 1000)
        //   } else {
        //     setAnimateText('reverse')
        //     setActiveIndex(0)
        //   }
        // }

        // return () => clearTimeout(timer)
    }, [animateText, activeIndex])

    return { animateText, activeIndex, setAnimateText }
}