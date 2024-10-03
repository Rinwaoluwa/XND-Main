"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navlinks } from "@/fixtures/navLink";
import "./styles.css";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import { AnimatePresence } from "framer-motion";
import ServicesDropdown from "../service-dropdown";

type HamburgerProps = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

export type DropdownState = {
  state: boolean;
  id: null | number;
};

const LockBody = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`;

const Hamburger: React.FC<HamburgerProps> = (props) => {
  const { showNav, setShowNav } = props;

  return (
    <label htmlFor="check" className="hamburger">
      <input
        type="checkbox"
        checked={showNav}
        onChange={() => setShowNav((state) => !state)}
        id="check"
      />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

interface IProps {
  showMerchantForm: boolean;
  setShowMerchantForm: React.Dispatch<React.SetStateAction<boolean>>;
  bgColor?: string;
}

const MobileSideBar: React.FC<IProps> = ({
  setShowMerchantForm,
  showMerchantForm,
  bgColor = "bg-white",
}) => {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<DropdownState>({
    state: false,
    id: 0,
  });

  const close = () => {
    setShowNav(false);
  };

  const onDropdownClick: (id: number) => void = (id: number) => {
    if (dropdown.state && dropdown.id === id) {
      setDropdown({ state: false, id: null });
    } else {
      setDropdown({ state: true, id });
    }
  };
  const handleShowMerchantForm = () => {
    setShowNav((state) => !state);
    setShowMerchantForm(!showMerchantForm);
  };

  return (
    <div className="lg:hidden relative z-20">
      {showNav && <LockBody />}
      <div>
        <Hamburger showNav={showNav} setShowNav={setShowNav} />
      </div>

      <div
        className={`bg-dark bg-opacity-10 w-screen h-screen fixed top-0 left-0 z-[1] ${showNav ? "visible" : "invisible"
          } transition-all`}
        onClick={close}
      ></div>

      <div
        className={`w-[14rem] ${bgColor} min-h-screen overflow-y-auto shadow-lg fixed top-0 flex flex-col z-[5] ${showNav ? "left-0" : "-left-[15rem]"
          } transition-all`}
      >
        <Link href="/" className="p-3">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={50}
            height={24}
            priority
          />
        </Link>
        <ul className="flex flex-col divide-y divide-g-300">
          {navlinks.map((navlink, id) => (
            <li
              key={id}
              className={`${pathname === navlink.route ? "text-p-400" : "text-p-600"
                }`}
            >
              {navlink.name === "Become a merchant" ? (
                <button className="p-3" onClick={handleShowMerchantForm}>
                  {navlink.name}
                </button>
              ) : navlink.dropdownItems ? (
                <div className="relative">
                  <div
                    className="flex items-center gap-[0.15rem] p-3"
                    role="button"
                    onClick={() => onDropdownClick(id)}
                  >
                    <span>{navlink.name}</span>
                    <span
                      className={`${dropdown.state && dropdown.id === id
                        ? "rotate-180"
                        : "rotate-0"
                        } transiton-all duration-150`}
                    >
                      <Image src="/assets/icons/caret-down.svg" alt="caret-down" width={16} height={16}/>
                    </span>
                  </div>
                  <AnimatePresence>
                    {dropdown.state && dropdown.id === id && (
                      <ServicesDropdown />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link href={navlink.route} onClick={close}>
                  <div className="p-3">{navlink.name}</div>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4 divide-y divide-g-300 py-4">
          <div className="p-3">
            <Link
              href="/register"
              className="text-white bg-main-primary w-28 lg:w-32 h-10 text-center flex items-center justify-center rounded-3xl"
            >
              Go to app
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
