import React from 'react';
import { Poppins } from 'next/font/google';
import JoinCommunity from "@/components/JoinCommunity";
import { terms, termsOfUse } from "@/fixtures/terms";
import SubscribeToNewsletter from '@/components/SubscirbeToNewletter';
import Footer from '@/components/footer';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

// Define the Terms Component
export default function Terms() {
  return (
    <>
      <section className={`${poppins.className} max-w-4xl mx-auto p-6 bg-white`}>
        <h1 className="text-xl lg:text-2xl font-bold my-8">Terms of Use & Privacy Policy</h1>
        <p className="text-sm font-medium mb-4">Last updated: March 7, 2022</p>
        
        {terms.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            {Array.isArray(section.info) ? (
              section.info.map((item, itemIndex) => (
                <p key={itemIndex} className="mb-4">{item}</p>
              ))
            ) : (
              <p>{section.info}</p>
            )}
          </div>
        ))}

        <p className='my-4 font-bold'>
          By using this Site or its Products and Services, you agree and warrant that you have
          read, understood, and agreed to be bound by these terms. If you do not accept these
          terms, you must not use – and are not authorized to use – all or any portion of the
          company’s website and its products or services (as defined below).
        </p>

        <p className='my-4'>Please read carefully before you use the services of this site.</p>

        {termsOfUse.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscriptions Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Subscriptions</h3>
          <p>
            Some parts of the Service are billed on a subscription basis (“Subscription(s)”).
            You will be billed in advance on a recurring and periodic basis (“Account Cycle”).
            Account cycles are set either on a monthly or annual basis, depending on the type of
            subscription plan you select when purchasing a Subscription.
            <br />
            At the end of each Account Cycle, your Subscription will automatically renew under
            the exact same conditions unless you cancel it or UX Content Collective, LLC cancels it.
            You may cancel your Subscription renewal by logging into your UXCC account or
            contacting UX Content Collective, LLC customer support team at help@uxcontent.com.
            <br />
            A valid payment method, including credit card or PayPal, is required to process the
            payment for your Subscription. You shall provide UX Content Collective, LLC with
            accurate and complete billing information which may include full name, address, state,
            zip code, telephone number, and a valid payment method information. By submitting
            such payment information, you automatically authorize UX Content Collective, LLC
            to charge all Subscription fees incurred through your account to any such payment
            instruments.
            <br />
            Should automatic billing fail to occur or complete for any reason, UX Content Collective,
            LLC reserves the right to terminate access to course materials until full payment is made.
          </p>
        </div>
      </section>

      <JoinCommunity />
      <SubscribeToNewsletter />
      <Footer />
    </>
  );
}
