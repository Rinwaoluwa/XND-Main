'use client'

import useOnClickOutside from '@/hooks/useOnclickOutside'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { DropdownState } from './mobile-side-bar/mobile-side-bar'
import useMediaQuery from '@/hooks/useMediaQuery'

type DropdownProps = {
  items: string[]
  show: boolean
  setDropdown: Dispatch<SetStateAction<DropdownState>>
}

const Dropdown: React.FC<DropdownProps> = ({ items, show, setDropdown }) => {
  const dropdownRef = useRef(null)

  const isMobile = useMediaQuery(767)
  useOnClickOutside(dropdownRef, show, () => {
    isMobile && setDropdown({ state: false, id: null })
  })

  return (
    <div
      ref={dropdownRef}
      className={`w-28 bg-white rounded-md shadow-lg text-p-600 text-sm absolute top-1/2 left-1/2 md:top-full md:left-0 z-[10] ${
        show
          ? 'opacity-100 visible translate-y-0'
          : 'opactiy-0 invisible -translate-y-1'
      } transition-all duration-150`}
    >
      <ul className=''>
        {items.map((item, id) => (
          <li
            className='p-3 cursor-pointer hover:bg-g-300 first-of-type:rounded-t-md last-of-type:rounded-b-md'
            key={id}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
