import Image from "next/image";
import Faqs from "@/components/faqs";
import { contacts } from "@/fixtures/contact";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div aria-describedby="contact page" className="bg-p-50">
      <section
        aria-describedby="contact exchange next door"
        className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center max-w-6xl mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">
          Contact us
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-8">
          We value your feedback, questions, and inquiries
        </p>
        <div className="w-full grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl">
          {contacts.map((contact, id) => (
            <div key={id} className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
              <div className="flex items-center mb-4">
                <Image
                  src={contact.src}
                  width={40}
                  height={40}
                  alt={contact.title}
                  className="mr-3"
                />
                <h2 className="text-lg font-semibold text-gray-900">{contact.title}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-3">{contact.info}</p>
              <ul>
                {contact.links.map((link, linkId) => (
                  <li key={linkId} className="text-sm mb-1">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Faqs />
      <Footer />
    </div>
  );
}