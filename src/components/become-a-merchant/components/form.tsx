import React, { ChangeEvent, ReactNode, useRef, useState } from 'react'
import { Button } from '../../buttons'
import Image from 'next/image'
import Dropdown from './dropDown'

export default function Form({
  id,
  children,
  ...restProps
}: {
  id: string
  children: React.ReactNode
  [x: string]: any
}) {
  return (
    <form id={id} className='text-g-800 w-full my-3' {...restProps}>
      {children}
    </form>
  )
}

Form.Group = function FormGroup({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  [x: string]: any
}) {
  return (
    <div className={`mb-4 ${className ? className : ''}`} {...props}>
      {children}
    </div>
  )
}

Form.Label = function FormLabel({
  srOnly = false,
  htmlFor,
  children,
  mb,
  ...props
}: {
  srOnly?: boolean
  htmlFor: string
  children: React.ReactNode
  mb?: string
  [x: string]: any
}) {
  return (
    <label
      className={`text-g-500 ${mb ? mb : 'mb-2'} text-left block ${srOnly ? 'sr-only' : ''
        }`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  )
}

Form.Input = function FormInput({
  id,
  type,
  checked,
  ...restProps
}: {
  id: string
  checked?: boolean
  type?: string
  [x: string]: any
}) {
  if (type === 'checkbox') {
    return (
      <div className='form-input__checkbox'>
        <input type='checkbox' {...restProps} id={id} />
        <Image
          src='/assets/icons/checkbox.svg'
          alt=''
          width={16}
          height={16}
          className='form-input__checkbox-decor-img'
        />
      </div>
    )
  }

  return (
    <input
      className='border border-g-400 rounded-lg px-4 py-3 text-base text-g-800 placeholder:text-g-500 w-full transition-all focus-visible:outline-0 focus-visible:border-black'
      id={id}
      type={type}
      {...restProps}
    />
  )
}

Form.Phone = function FormPhone({
  value,
  ...restProps
}: {
  value: string
  [x: string]: any
}) {
  return (
    <div className='border border-g-400 rounded-lg flex'>
      <input
        type='tel'
        placeholder='+234 811 222 3333'
        className='px-4 py-3 border-0 text-base text-g-800 placeholder:text-g-500 w-full transition-all focus-visible:outline-0 focus-visible:border-black rounded-lg'
        {...restProps}
      />
    </div>
  )
}

Form.Date = function FormDate({
  value,
  placeholder,
  ...restProps
}: {
  value: string
  placeholder: string
  [x: string]: any
}) {
  return (
    <div className='relative border border-g-400 rounded-lg px-4 py-3 h-fit flex gap-2.5 items-center'>
      <span>
        <Image
          src='/assets/icons/calendar-outline.svg'
          width={24}
          height={24}
          className='object-contain'
          alt='date'
        />
      </span>
      <input
        className='text-base text-g-800 placeholder:text-g-500 w-full bg-transparent'
        value={value}
        placeholder={placeholder}
        readOnly
      />
      <input
        type='date'
        className='absolute top-0 left-0 h-full w-full z-10 form-input__datepicker'
        value={value}
        {...restProps}
      />
    </div>
  )
}

Form.Link = function FormLink({
  id,
  ...props
}: {
  id: string
  [x: string]: any
}) {
  return (
    <div className='border border-g-400 rounded-lg flex'>
      <div className='flex items-center justify-center w-[60px] rounded-l-lg bg-g-200'>
        <Image
          src='/assets/icons/link.svg'
          alt='link'
          width={20}
          height={20}
          className='object-contain'
        />
      </div>
      <input
        type='text'
        id={id}
        className='px-4 py-3 border-0 text-base text-g-800 placeholder:text-g-500 w-full transition-all focus-visible:outline-0 rounded-r-lg'
        {...props}
      />
    </div>
  )
}

Form.TextArea = function FormTextArea({
  id,
  ...restProps
}: {
  id: string
  [x: string]: any
}) {
  return (
    <textarea
      className='border border-g-400 rounded-lg px-4 py-3 text-base text-g-800 placeholder:text-g-500 w-full transition-all focus-visible:outline-0 focus-visible:border-black'
      id={id}
      {...restProps}
      rows={5}
      spellCheck={true}
    ></textarea>
  )
}

Form.Dropdown = function FormDropdown({
  value,
  options,
  onChange,
  placeholder,
  rightCustomIcon,
  leftCustomIcon,
  ...restProps
}: {
  value: string
  placeholder: string
  options: { name: string; value: string }[]
  onChange: (value: { name: string; value: string; }) => void
  [x: string]: any
  rightCustomIcon?: ReactNode;
  leftCustomIcon?: ReactNode;
}) {
  const handleChange = (selected: { name: string; value: string; }) => {
    onChange(selected)
  }

  return (
    <div
      className='border border-g-400 rounded-lg px-4 py-1 w-full'
      {...restProps}
    >
      <Dropdown
        head={
          <span
            className={`font-normal ${value ? 'text-g-500' : 'text-g-500'
              }`}
          >
            {value || placeholder}
          </span>
        }
        leftCustomIcon={leftCustomIcon}
        rightCustomIcon={rightCustomIcon}
        closeOnItemClick
      >
        <ul className='divide-y divide-g-200 max-h-[400px] overflow-y-auto'>
          {options.map((item, id) => (
            <li
              key={id}
              onClick={() => handleChange(item)}
              className='py-1 cursor-pointer hover:bg-g-200 transition-all bg-white'
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  )
}

Form.FileInput = function FileInput({
  type,
  placeholder,
  id,
  name,
  accept,
  multiple = false,
  fileTypes,
  onFiles,
  ...restProps
}: {
  placeholder: string
  id: string
  name: string
  accept: string
  multiple?: boolean
  fileTypes: string
  onFiles: (e: ChangeEvent<HTMLInputElement>) => void
  [x: string]: any
}) {
  const [error, setError] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files
    const MAXSIZE = 5 * 1024 * 1024 // 5 MB
    let size = 0

    if (files) {
      for (let i = 0; i < files.length; i++) {
        size += files[i].size
      }
      if (size > MAXSIZE) {
        setError(`${files.length > 1 ? 'Files' : 'File'} must not exceed 5MB`)
      } else {
        onFiles(e)
      }
    }
  }

  const clickInput = () => {
    setError('')
    inputRef.current && inputRef.current.click()
  }

  return (
    <div className='w-full'>
      <div className='border border-g-400 rounded-lg w-full flex mb-2'>
        <span className='text-g-500 inline w-full px-4 py-3 text-base'>
          Add attachment (MAX 5MB)
        </span>
        <button
          className='flex items-center justify-center w-[60px] rounded-lg bg-white hover:bg-g-200 transition-all relative'
          onClick={clickInput}
          type='button'
        >
          <input
            type='file'
            id={id}
            name={name}
            hidden
            accept={accept}
            placeholder={placeholder}
            {...restProps}
            multiple={multiple}
            onChange={onFileChange}
            ref={inputRef}
          />
          <Image
            src='/assets/icons/plus-dark-2.svg'
            alt='link'
            width={20}
            height={20}
            className='object-contain'
          />
        </button>
      </div>
      <p className='text-g-600 text-sm'>You can add only {fileTypes} files</p>
      {error && <p className='text-negative text-sm mt-2'>{error}</p>}
    </div>
  )
}

Form.Submit = function FormSubmit({
  children,
  form,
  width,
  ...props
}: {
  form: string
  width?: string
  [x: string]: any
}) {
  return (
    <Button type='submit' form={form} width={width} {...props}>
      {children}
    </Button>
  )
}
