import Link from 'next/link';
import React, { ReactNode } from 'react';
import {
    motion,
    Variants,
    Target,
    VariantLabels,
    AnimationControls,
    TargetAndTransition
} from "framer-motion";

const buttonVariant = {
    animate: {
        width: [0, 4, 0],
        transition: { duration: .99, repeat: Infinity, ease: "linear" },
    },
};

// Currently this only animates the div.
export default function AnimatedLinkButton(
    { children, href, variant = buttonVariant, animate = "animate", initial = "initial" }:
        {
            children: ReactNode,
            href: string;
            variant?: Variants;
            initial?: boolean | Target | VariantLabels;
            animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
        }) {
    return (
        <Link href={href} className="bg-main-primary w-full max-w-[158px] mr-8 text-white text-lg font-[400] px-2 py-2 rounded-3xl hover:bg-blue transition duration-300 flex items-center justify-center gap-2">
            <p>{children}</p>
            <motion.div
                variants={variant}
                initial={initial}
                animate={animate}
            >
            </motion.div>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 8.5H13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 4L13.5 8.5L9 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
}