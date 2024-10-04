"use client"

import Image from "next/image";
import { socials } from "@/fixtures/socials";
import { footerGroups } from "@/fixtures/footerGroups";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-black container-padding-x container-padding-y text-white text-center">
      <div
        className="container-padding-y grid grid-cols-12 gap-x-3 gap-y-6 text-left"
        aria-describedby="links"
      >
        <div className="col-span-12 lg:col-span-4 pr-6">
          <Link href="/" className="flex items-center mb-4">
            <span className="ml-2 text-xl ">Exchange <br /> Next Door</span>
            <svg width="100" height="100" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.8301 8.70436V11.6094L31.6792 13.5645L31.8559 12.0512L34.2418 9.36711L36.9259 12.0512V15.6743L40.6152 17.1654V1.94434L26.8301 8.70436Z" fill="#072F54" />
              <path d="M21.252 39.3786V36.4736L16.4029 34.5185L16.2261 36.0318L13.8402 38.7159L11.1561 36.0318V32.4088L7.4668 30.9176V46.1387L21.252 39.3786Z" fill="#072F54" />
              <path d="M21.2519 16.2707L7.4668 9.88623V24.6765L21.2519 30.2436V16.2707Z" fill="#FBC108" />
              <path d="M40.6045 23.4064L26.8193 17.8394V31.8123L40.6045 38.1968V23.4064Z" fill="#FBC108" />
            </svg>
          </Link>

          <p className="mb-6">
            Effortlessly trade your gift cards for USDT with a verified
            merchant. Sell your USDT and get paid in your local currency.
          </p>
          <div className="flex flex-row gap-3" aria-describedby="social links">
            {socials.map((social, id) => (
              <span className="hover:scale-[1.2] cusor-pointer" key={id}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={34}
                  height={34}
                  className="w-10"
                />
              </span>
            ))}
          </div>
        </div>
        {footerGroups.map((group, id) => (
          <div className="col-span-12 md:col-span-4 lg:col-span-2" key={id}>
            <h6 className={`${pathname === "/xnd-app" ? "text-[#FBBD08]": "text-p-400"} text-[1.2rem] font-[600] mb-5`}>
              {group.header}
            </h6>
            <div className="flex flex-col gap-3 lg:gap-4">
              {group.links.map((link, link_id) => (
                <Link href={link.href} key={link_id}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-[#414141] w-4/5 md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto"></div>

      <p className="text-g-800 pt-12">
        © Exchange Next Door 2023. All right reserved
      </p>
    </footer>
  );
}
