"use client"

import Image from "next/image";
import { socials } from "@/fixtures/socials";
import { footerGroups } from "@/fixtures/footerGroups";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMerchantForm } from "@/lib/context/MerchantFormContext";

export default function Footer() {
  const pathname = usePathname();
  const { handleShowMerchantForm } = useMerchantForm();
  const SVGS = [
    <Facebok key={0} />,
    <Twitter key={1} />,
    <Linkedin key={2} />,
    <Instagram key={3} />
  ]

  return (
    <footer className={`${["/terms", "/privacy", "/about", "/faq"].includes(pathname) ? "bg-[#FBFBFB]" : "bg-black text-white "} container-padding-x container-padding-y text-center`}>
      <div
        className="container-padding-y grid grid-cols-12 gap-x-3 gap-y-6 text-left"
        aria-describedby="Footer"
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

            {socials.map((social, id) => {
              if (["/terms", "/privacy", "/about", "/faq"].includes(pathname)) {
                return (
                  <a href={social.url} className="hover:scale-[1.2] cusor-pointer" key={id}>
                    {SVGS[id]}
                  </a>
                )
              }

              return (
                <a href={social.url} className="hover:scale-[1.2] cusor-pointer" key={id}>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={34}
                    height={34}
                    className="w-10 fill-[#2D4F7E]"
                  />
                </a>
              )
            }
            )}
          </div>
        </div>
        {footerGroups.map((group, id) => (
          <div className="col-span-12 md:col-span-4 lg:col-span-2" key={id}>
            <h6 className={`${pathname === "/xnd-app" ? "text-[#FBBD08]" : "text-p-400"} text-[1.2rem] font-[600] mb-5`}>
              {group.header}
            </h6>
            <div className="flex flex-col gap-3 lg:gap-4">
              {group.links.map((link, link_id) => {
                if (link.title === "Be a merchant") {
                  return (
                    <span className="cursor-pointer" key={link_id} onClick={() => handleShowMerchantForm(true)}>
                      {link.title}
                    </span>
                  )
                }
                return (
                  <Link href={link.href} key={link_id}>
                    {link.title}
                  </Link>
                )
              }
              )}
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


//  Light Mode SVG
function Facebok() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="#2D4F7E" />
      <path d="M19.4062 16.9558L19.8235 14.2352H17.2132V12.4697C17.2132 11.7254 17.5778 10.9999 18.747 10.9999H19.9338V8.68374C19.9338 8.68374 18.8567 8.49991 17.827 8.49991C15.6771 8.49991 14.272 9.80286 14.272 12.1617V14.2352H11.8823V16.9558H14.272V23.5326C14.7512 23.6078 15.2423 23.647 15.7426 23.647C16.2429 23.647 16.734 23.6078 17.2132 23.5326V16.9558H19.4062Z" fill="#2D4F7E" />
    </svg>
  )
}

function Twitter() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="#2D4F7E" />
      <path d="M22.3943 13.7906C22.4039 13.9291 22.4039 14.0677 22.4039 14.2075C22.4039 18.4676 19.1671 23.3808 13.2484 23.3808V23.3782C11.5 23.3808 9.78791 22.879 8.31604 21.9329C8.57027 21.9635 8.82578 21.9788 9.08192 21.9795C10.5308 21.9807 11.9384 21.4936 13.0783 20.5967C11.7013 20.5705 10.4939 19.671 10.0721 18.3578C10.5544 18.451 11.0514 18.4318 11.5248 18.3022C10.0237 17.9984 8.94365 16.6769 8.94365 15.1421C8.94365 15.1281 8.94365 15.1147 8.94365 15.1013C9.39095 15.3509 9.89177 15.4894 10.4041 15.5047C8.99017 14.558 8.55434 12.6734 9.40815 11.2C11.0419 13.2141 13.4523 14.4386 16.0398 14.5682C15.7805 13.4484 16.1348 12.275 16.9707 11.4879C18.2667 10.2672 20.3051 10.3298 21.5233 11.6277C22.244 11.4853 22.9347 11.2204 23.5667 10.845C23.3265 11.5913 22.8238 12.2252 22.1522 12.6281C22.79 12.5527 23.4132 12.3816 24 12.1205C23.568 12.7692 23.0239 13.3342 22.3943 13.7906Z" fill="#2D4F7E" />
    </svg>

  )
}

function Linkedin() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="#2D4F7E" />
      <path d="M23.0214 21.8662H20.2277V17.5342C20.2277 16.5012 20.209 15.1714 18.7746 15.1714C17.3196 15.1714 17.0969 16.2969 17.0969 17.459V21.8659H14.3032V12.9575H16.9852V14.175H17.0227C17.2911 13.7206 17.679 13.3468 18.145 13.0934C18.611 12.84 19.1376 12.7164 19.6689 12.736C22.5005 12.736 23.0226 14.5801 23.0226 16.9792L23.0214 21.8662ZM11.1509 11.7398C10.8303 11.7399 10.5168 11.6458 10.2502 11.4695C9.98354 11.2931 9.77571 11.0424 9.65295 10.7491C9.53019 10.4558 9.49801 10.1331 9.56051 9.82168C9.62301 9.51027 9.77737 9.22422 10.0041 8.99967C10.2308 8.77513 10.5196 8.62219 10.8341 8.5602C11.1486 8.4982 11.4745 8.52993 11.7708 8.65138C12.0671 8.77283 12.3203 8.97853 12.4985 9.24249C12.6767 9.50644 12.7718 9.81679 12.7719 10.1343C12.7719 10.3451 12.73 10.5538 12.6486 10.7486C12.5672 10.9434 12.4478 11.1204 12.2973 11.2695C12.1467 11.4186 11.968 11.5368 11.7713 11.6175C11.5747 11.6982 11.3639 11.7398 11.1509 11.7398ZM12.5478 21.8662H9.75117V12.9575H12.5478V21.8662Z" fill="#2D4F7E" />
    </svg>
  )
}

function Instagram() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" stroke="#2D4F7E" />
      <g clip-path="url(#clip0_0_1)">
        <path d="M13.0765 8.99053C12.3254 9.02597 11.8125 9.14582 11.3642 9.32201C10.9001 9.50286 10.5068 9.74554 10.1154 10.1383C9.72411 10.531 9.48312 10.9246 9.30354 11.3894C9.12975 11.8388 9.01201 12.3521 8.97884 13.1036C8.94566 13.855 8.93832 14.0966 8.94199 16.0135C8.94566 17.9304 8.95413 18.1707 8.99055 18.9237C9.02641 19.6746 9.14585 20.1874 9.32204 20.6359C9.50317 21.0999 9.74557 21.4931 10.1385 21.8846C10.5314 22.2761 10.9247 22.5165 11.3906 22.6964C11.8395 22.8699 12.353 22.9882 13.1043 23.0211C13.8556 23.054 14.0975 23.0616 16.0138 23.0579C17.9301 23.0542 18.1714 23.0458 18.9243 23.0101C19.6772 22.9743 20.1873 22.8541 20.6359 22.6787C21.1 22.4972 21.4934 22.2552 21.8846 21.8622C22.2758 21.4691 22.5167 21.0752 22.6961 20.6102C22.87 20.1613 22.9882 19.6478 23.0208 18.897C23.0537 18.1436 23.0615 17.903 23.0578 15.9864C23.0541 14.0698 23.0455 13.8295 23.0098 13.0767C22.9741 12.324 22.8545 11.8128 22.6785 11.364C22.497 10.8999 22.2549 10.507 21.8622 10.1153C21.4694 9.72352 21.0753 9.48281 20.6104 9.3038C20.1611 9.13001 19.648 9.01157 18.8966 8.97909C18.1453 8.94662 17.9034 8.93829 15.9864 8.94197C14.0694 8.94564 13.8294 8.95382 13.0765 8.99053ZM13.1589 21.7512C12.4707 21.7213 12.097 21.6069 11.848 21.5112C11.5182 21.3841 11.2833 21.2305 11.0351 20.9847C10.7869 20.739 10.6344 20.5032 10.5057 20.1741C10.409 19.9251 10.2925 19.5518 10.2603 18.8636C10.2253 18.1197 10.2179 17.8964 10.2138 16.0118C10.2098 14.1272 10.217 13.9042 10.2496 13.16C10.2789 12.4724 10.394 12.0982 10.4896 11.8494C10.6166 11.5191 10.7697 11.2846 11.016 11.0366C11.2624 10.7886 11.4974 10.6358 11.8268 10.507C12.0755 10.4099 12.4488 10.2944 13.1368 10.2617C13.8812 10.2264 14.1042 10.2193 15.9885 10.2152C17.8728 10.2111 18.0964 10.2182 18.8411 10.251C19.5288 10.2809 19.9031 10.3948 20.1517 10.491C20.4816 10.618 20.7164 10.7706 20.9644 11.0174C21.2125 11.2642 21.3654 11.4984 21.4941 11.8285C21.5914 12.0765 21.7069 12.4496 21.7394 13.138C21.7748 13.8824 21.7828 14.1056 21.7862 15.9898C21.7896 17.8739 21.783 18.0977 21.7504 18.8415C21.7203 19.5298 21.6062 19.9036 21.5104 20.1529C21.3833 20.4826 21.2301 20.7176 20.9836 20.9655C20.7371 21.2134 20.5024 21.3662 20.1729 21.495C19.9244 21.5919 19.5507 21.7077 18.8633 21.7405C18.1189 21.7755 17.8958 21.7828 16.0108 21.7869C14.1258 21.791 13.9035 21.7834 13.1591 21.7512M18.9134 12.2273C18.9137 12.3948 18.9637 12.5585 19.057 12.6977C19.1503 12.8368 19.2828 12.9452 19.4377 13.009C19.5926 13.0729 19.763 13.0893 19.9272 13.0564C20.0915 13.0234 20.2423 12.9424 20.3605 12.8237C20.4788 12.705 20.5592 12.554 20.5916 12.3896C20.624 12.2252 20.6069 12.0549 20.5424 11.9002C20.478 11.7455 20.3692 11.6135 20.2297 11.5206C20.0902 11.4278 19.9263 11.3785 19.7588 11.3788C19.5342 11.3793 19.319 11.4689 19.1604 11.628C19.0019 11.7871 18.913 12.0027 18.9134 12.2273ZM12.3755 16.007C12.3795 18.0089 14.0053 19.628 16.0067 19.6242C18.0082 19.6204 19.6285 17.9948 19.6247 15.9929C19.6209 13.991 17.9946 12.3714 15.9929 12.3754C13.9912 12.3793 12.3717 14.0054 12.3755 16.007ZM13.647 16.0045C13.6461 15.5391 13.7832 15.0839 14.0409 14.6964C14.2987 14.309 14.6656 14.0067 15.0952 13.8277C15.5248 13.6488 15.9978 13.6012 16.4544 13.6911C16.9111 13.781 17.3308 14.0043 17.6605 14.3327C17.9902 14.6611 18.2151 15.0799 18.3068 15.5362C18.3985 15.9924 18.3529 16.4656 18.1756 16.8959C17.9984 17.3263 17.6975 17.6943 17.3111 17.9536C16.9247 18.213 16.47 18.3519 16.0046 18.3528C15.6956 18.3534 15.3895 18.2932 15.1038 18.1755C14.818 18.0579 14.5583 17.8851 14.3394 17.667C14.1204 17.4489 13.9466 17.1899 13.8278 16.9046C13.709 16.6193 13.6476 16.3135 13.647 16.0045Z" fill="#2D4F7E" />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect width="14.1176" height="14.1176" fill="white" transform="translate(8.94116 8.94116)" />
        </clipPath>
      </defs>
    </svg>
  )
}
