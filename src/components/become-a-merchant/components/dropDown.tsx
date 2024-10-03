"use client";

import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  head,
  children,
  showInitially = false,
  closeOnItemClick = false,
  leftCustomIcon,
  rightCustomIcon,
}: {
  head: React.ReactNode;
  showInitially?: boolean;
  closeOnItemClick?: boolean;
  children: React.ReactNode;
  leftCustomIcon?: React.ReactNode;
  rightCustomIcon?: React.ReactNode;
}) {
  const [show, setShow] = useState<boolean>(showInitially);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const open = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShow(!show);
  };

  const close = () => {
    setShow(!show);
  };

  return (
    <div ref={parent}>
      <button
        className="flex w-full justify-between items-center text-g-800 font-medium py-2"
        onClick={open}
      >
        <span className="flex items-center gap-4">
          {leftCustomIcon && <span>{leftCustomIcon}</span>}
          {head}
        </span>
        <span>
          {rightCustomIcon ? (
            rightCustomIcon
          ) : (
            <Image
              src="/assets/icons/dropdown-caret.svg"
              width={16}
              height={16}
              alt="dropdown"
              className={`transition-all ${show ? "rotate-180" : "rotate-0"}`}
            />
          )}
        </span>
      </button>
      {show && (
        <div
          className="text-g-600"
          onClick={closeOnItemClick ? close : undefined}
        >
          {children}
        </div>
      )}
    </div>
  );
}
