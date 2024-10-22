"use client"

import { useRouter } from "next/navigation";
import Button from "./button";

export default function JoinCommunity() {
    const router = useRouter();
    return (
        <section
            aria-describedby="get started"
            className="container-padding-x container-padding-y bg-p-600 text-center text-white"
        >
            <h2 className="section-header">Join our community today!</h2>
            <p className="section-description">
                Whether you have unwanted gift cards gathering dust or are in search
                of great deals on gift cards and USDT, Exchange Next Door is here to
                help. Join our thriving community of traders and start unlocking the
                value of your digital assets today.
            </p>

            <div className="pt-8">
                <Button
                    aria-describedby="get started button"
                    text="Get Started today"
                    onClick={() => router.push("/xnd-app")}
                />
            </div>
        </section>
    )
}