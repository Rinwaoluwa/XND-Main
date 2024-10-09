"use client";

import { useState } from "react";
import { navlinks } from "@/fixtures/navLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileSideBar, {
  DropdownState,
} from "../mobile-side-bar/mobile-side-bar";
import ServicesDropdown from "../service-dropdown";
import { AnimatePresence } from "framer-motion";
import BMerchant from "../become-a-merchant";
import Image from "next/image";
import { useMerchantForm } from "@/lib/context/MerchantFormContext";

export default function HeaderNav() {
  const pathname = usePathname();
  const {showMerchantForm, handleShowMerchantForm} = useMerchantForm();
  const [dropdown, setDropdown] = useState<DropdownState>({
    state: false,
    id: 0,
  });

  const onMouseEnterDropdown = (id: number) => setDropdown({ state: true, id });
  const onMouseLeaveDropdown = (id: number) =>
    setDropdown({ state: false, id: null });

  return (
    <header>
      <nav
        className={`container-padding-x ${
        pathname === "/xnd-app" ? "bg-black" :
        ["/terms", "/privacy", "/about"].includes(pathname) ? "bg-white" : "bg-p-50"}`
        }
      >
        <div className="flex flex-row items-center justify-between">
          <LandingLogo />

          <MobileSideBar
            setShowMerchantForm={handleShowMerchantForm}
            showMerchantForm={showMerchantForm}
            bgColor={pathname === "/xnd-app" ? "bg-black" : "bg-white"}
          />
          {showMerchantForm && (
            <BMerchant
              setShowMerchantForm={handleShowMerchantForm}
              showMerchantForm={showMerchantForm}
            />
          )}
          <ul className="hidden lg:flex flex-row items-center py-6 gap-4">
            {navlinks.map((navlink, id) => (
              <li
                key={id}
                className={`${pathname === "/xnd-app" ? "text-white" : pathname === navlink.route ? "text-p-400" : "text-p-600"
                  } hover:text-p-400 flex justify-center flex-col mx-2 xl:mx-3`}
              >
                {navlink.name === "Apply as merchant" ? (
                  <button
                    onClick={() => handleShowMerchantForm(!showMerchantForm)}
                  >
                    {navlink.name}
                  </button>
                ) : navlink.dropdownItems ? (
                  <div
                    onMouseEnter={() => onMouseEnterDropdown(id)}
                    onMouseLeave={() => onMouseLeaveDropdown(id)}
                  >
                    <div className="flex items-center gap-[0.15rem] cursor-pointer">
                      <span>{navlink.name}</span>
                      <span
                        className={`${dropdown.state && dropdown.id === id
                          ? "rotate-180"
                          : "rotate-0"
                          } transiton-all duration-150`}
                      >
                        <Image src="/assets/icons/caret-down.svg" alt="caret-down" width={16} height={16} />
                      </span>
                    </div>

                    <AnimatePresence>
                      {dropdown.state && dropdown.id === id && (
                        <ServicesDropdown />
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div>
                    <Link href={navlink.route}>{navlink.name}</Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="lg:flex flex-row gap-2 lg:gap-3 xl:gap-5 items-center hidden">
            {pathname === "/xnd-app" ?
              (<Link
                href="https://xnd-frontend.vercel.app/auth/login"
                className="text-black bg-white w-28 lg:w-32 h-10 text-center flex items-center justify-center hover:bg-opacity-90 rounded-3xl"
              >
                Login
              </Link>) :
              (<Link
                href="/xnd-app"
                className="text-white bg-main-primary w-28 lg:w-32 h-10 text-center flex items-center justify-center hover:bg-opacity-90 rounded-3xl"
              >
                Go to app
              </Link>)}
          </div>
        </div>
      </nav>
    </header>
  );
};


export const LandingLogo = () => (
  <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.8301 8.70436V11.6094L31.6792 13.5645L31.8559 12.0512L34.2418 9.36711L36.9259 12.0512V15.6743L40.6152 17.1654V1.94434L26.8301 8.70436Z" fill="#072F54" />
    <path d="M21.252 39.3786V36.4736L16.4029 34.5185L16.2261 36.0318L13.8402 38.7159L11.1561 36.0318V32.4088L7.4668 30.9176V46.1387L21.252 39.3786Z" fill="#072F54" />
    <path d="M21.2519 16.2707L7.4668 9.88623V24.6765L21.2519 30.2436V16.2707Z" fill="#FBC108" />
    <path d="M40.6045 23.4064L26.8193 17.8394V31.8123L40.6045 38.1968V23.4064Z" fill="#FBC108" />
  </svg>
);
