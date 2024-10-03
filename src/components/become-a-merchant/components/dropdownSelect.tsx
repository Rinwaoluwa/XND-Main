import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'

export interface SelectOption {
  value: string
  name: string
}

export default function DropdownSelect ({
  title,
  options,
  selected,
  onSelected,
  width,
  placeholder,
  ...restProps
}: {
  title?: React.ReactNode
  options: SelectOption[]
  selected: SelectOption
  onSelected: (val: SelectOption) => void
  width?: string
  placeholder?: string
  [x: string]: any
}) {
  const [show, setShow] = useState<boolean>(false)

  const toggleDropdown = () => setShow(!show)

  const onSelectOptionClick = (option: SelectOption) => {
    onSelected(option)
    toggleDropdown()
  }

  return (
    <div
      className={`text-g-800 relative ${width ? width : 'w-fit'}`}
      {...restProps}
    >
      <button
        className='flex flex-row items-center justify-between w-full border border-g-300 bg-white rounded-[4px] py-2 px-4 gap-1.5 text-left'
        type='button'
        tabIndex={0}
        onClick={toggleDropdown}
      >
        {selected?.value ? (
          <span>{selected?.name}</span>
        ) : (
          <span className='text-g-600'>{placeholder}</span>
        )}
        <Image
          src='/assets/icons/dropdown-caret.svg'
          width={12}
          height={12}
          alt='caret'
          className={`transition-all ${show ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <ul
        className={`absolute top-[calc(100%_+_0.5rem)] right-0 lg:left-0 rounded-lg bg-white transition-[transform] duration-100 ease-in-expo origin-top z-[1] border border-g-300 divide-y divide-g-100 = max-h-[300px] w-fit min-w-full app-scrollbar py-2 ${
          show ? 'scale-y-100' : 'scale-y-0'
        }`}
        aria-describedby='select dropdown'
      >
        {options?.map((option, id) => (
          <li key={id}>
            <button
              className={`py-2 px-4 hover:bg-g-100 ${
                selected?.value === option?.value ? 'bg-g-200' : ''
              } cursor-pointer transition-all w-full text-left whitespace-nowrap`}
              onClick={() => onSelectOptionClick(option)}
            >
              {option?.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
