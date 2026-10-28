import { IconProps } from '@/types/iconProps'

<<<<<<< HEAD
const IconClose = ({ width, height }: IconProps) => {
=======
const IconClose = ({ width, height, color }: IconProps) => {
>>>>>>> import-web-develop
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
<<<<<<< HEAD
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 2L2 15"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2L15 15"
        className="dark:stroke-gray-300 stroke-white-400"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
=======
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 2L2 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 2L15 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
>>>>>>> import-web-develop
    </svg>
  )
}

export default IconClose
