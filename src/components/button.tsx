export default function Button ({
  text,
  ...restProps
}: {
  text: string
  [x: string]: any
}) {
  return (
    <button
      className='text-dark text-base lg:text-lg bg-main-secondary rounded-md py-4 px-6 lg:py-6 lg:px-12 hover:bg-opacity-90 transition-all'
      {...restProps}
    >
      {text}
    </button>
  )
}
