import Image from "next/image";
import Faqs from "@/components/faqs";
import { contacts } from "@/fixtures/contact";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div aria-describedby="contact page">
      <section
        aria-describedby="contact exchange next door"
        className="container-padding-y container-padding-x bg-p-50 flex flex-col items-center"
      >
        <h1 className="section-header text-center">
          Contact Exchange Next Door
        </h1>
        <p className="section-description text-center">
          We value your feedback, questions, and inquiries
        </p>
        <div className="mt-5 grid gap-4 grid-cols-1 md:grid-cols-2">
          {contacts.map((contact, id) => (
            <div key={id} className="p-7 border bg-[#FFFFFF] w-[400px] rounded-2xl">
              <div className="mb-7">
                <Image
                  src={contact.src}
                  width={40}
                  height={40}
                  alt={contact.title}
                />
              </div>
              <div className="mb-7">
                <h6 className="text-xl text-p-600 font-[600] mb-2">
                  {contact.title}
                </h6>
                <p className="text-base text-g-700">{contact.info}</p>
              </div>
              <ul>
                {contact.links.map((link, id) => (
                  <li
                    key={id}
                    className="text-p-600 underline mb-1 break-words break-all"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer noopener"
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
