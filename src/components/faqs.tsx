"use client";

import * as React from "react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
// import { faqs } from "@/fixtures/faqs";

const faqs = [
  {
    question: 'What is Exchange Next Door?',
    answer: 'Exchange Next Door is a platform where you can securely trade your unused gift cards for cryptocurrency, offering a seamless and secure transaction experience.'
  },
  {
    question: 'How long does it take to complete a trade?',
    answer: 'Most trades are completed within minutes, depending on the seller and merchant involved. You"ll be notified once the transaction is finalised.'
  },
  {
    question: 'How do I trade my gift cards for crypto?',
    answer: 'Simply sign up, go through our simple KYC, select the gift card you wish to trade, and choose your preferred merchant to whom you will sell. Follow the prompts for a quick and secure transaction.'
  },
  {
    question: 'Are there any fees for trading gift cards?',
    answer: 'Exchange Next Door does NOT apply a transaction fee during the peer-to-peer process, however wallet servicing fee is charged which is displayed before confirming the summary your trade.'
  },
  {
    question: 'What types of gift cards can I trade?',
    answer: 'We accept a wide range of popular gift cards, including retail, restaurant, and online service cards. Check our platform for a full list of supported gift cards.'
  },
  {
    question: 'Can I trade partial gift card balances?',
    answer: 'Yes, you can choose to trade the entire balance or a portion of your gift card. However this can greatly be dependant on the merchant.'
  },
  {
    question: 'Is my transaction secure?',
    answer: 'Absolutely. We use industry-leading security measures to ensure that your personal information and transactions are fully protected.'
  },
  {
    question: 'What cryptocurrencies can I receive in exchange for my gift card?',
    answer: 'As of now, the only cryptocurrency acceptable on the platform is USDT. However, we plan to add more options in the future.'
  }
];

export default function Faqs() {
  const isMobile = useMediaQuery(992);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">FAQ</h2>
        <p className="text-center text-gray-600 mb-12">Some of the questions that new customers frequently ask.</p>
        <div className="relative grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="self-start">
                <svg width="80" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" fill="white" />
                  <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#AFAFAF" />
                  <path d="M20 29C24.9706 29 29 24.9706 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 26C20.6213 26 21.125 25.4963 21.125 24.875C21.125 24.2537 20.6213 23.75 20 23.75C19.3787 23.75 18.875 24.2537 18.875 24.875C18.875 25.4963 19.3787 26 20 26Z" fill="black" />
                  <path d="M20 21.5V20.75C20.5192 20.75 21.0267 20.596 21.4584 20.3076C21.8901 20.0192 22.2265 19.6092 22.4252 19.1295C22.6239 18.6499 22.6758 18.1221 22.5746 17.6129C22.4733 17.1037 22.2233 16.636 21.8562 16.2688C21.489 15.9017 21.0213 15.6517 20.5121 15.5504C20.0029 15.4492 19.4751 15.5011 18.9955 15.6998C18.5158 15.8985 18.1058 16.235 17.8174 16.6666C17.529 17.0983 17.375 17.6058 17.375 18.125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 gradient-5 h-[50px] w-full z-10"></div>
        </div>
        {!isMobile && <div className="mt-12 flex justify-center">
          <div className="border flex items-center justify-center rounded-2xl p-4 w-[70%]">
            <Image
              src="/assets/images/support-agent.png"
              alt="Support Agent"
              width={48}
              height={48}
              className="rounded-full mr-4"
            />
            <div className="flex-grow">
              <p className="font-semibold">Still have questions?</p>
              <p className="text-gray-600 text-sm">Can&apos;t find the answers you are looking for? Reach out to our team</p>
            </div>
            <button className="ml-4 px-6 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-colors duration-200">
              Get in touch
            </button>
          </div>
        </div>}
      </div>
    </section>
  )
}
