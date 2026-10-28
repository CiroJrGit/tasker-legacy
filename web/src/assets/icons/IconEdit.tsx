import { IconProps } from '@/types/iconProps'

<<<<<<< HEAD
const IconEdit = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      className="shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.16611 1.68628H6.68475C2.98136 1.68628 1.5 3.16764 1.5 6.87103V11.3151C1.5 15.0185 2.98136 16.4998 6.68475 16.4998H11.1288C14.8322 16.4998 16.3136 15.0185 16.3136 11.3151V9.83374"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8992 2.44182L6.06268 8.27835C5.84047 8.50056 5.61827 8.93756 5.57383 9.25605L5.25534 11.4855C5.13683 12.2928 5.70715 12.8557 6.51449 12.7446L8.74393 12.4262C9.05502 12.3817 9.49202 12.1595 9.72163 11.9373L15.5582 6.10077C16.5655 5.09345 17.0395 3.92317 15.5582 2.44182C14.0768 0.960459 12.9065 1.43449 11.8992 2.44182Z"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0625 3.27881C11.5588 5.04903 12.9438 6.4341 14.7215 6.93776"
        className="dark:stroke-gray-100 stroke-gray-300"
        strokeWidth="1.2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 18 19"
=======
const IconEdit = ({ width, height, color }: IconProps) => {
  return (
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 18 18"
    //   className={`shrink-0 ${color}`}
>>>>>>> import-web-develop
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
<<<<<<< HEAD
    //     d="M10.2658 2.63733L2.05355 11.3297C1.74347 11.6598 1.44339 12.31 1.38337 12.7601L1.01327 16.001C0.883238 17.1713 1.72347 17.9715 2.88378 17.7715L6.10465 17.2213C6.55477 17.1413 7.18497 16.8112 7.49506 16.4711L15.7073 7.77872C17.1277 6.27832 17.7678 4.56786 15.5572 2.47729C13.3566 0.406731 11.6862 1.13693 10.2658 2.63733Z"
    //     className="dark:stroke-gray-300 stroke-white-400"
    //     strokeWidth="1.5"
=======
    //     d="M8.16611 1.68628H6.68475C2.98136 1.68628 1.5 3.16764 1.5 6.87103V11.3151C1.5 15.0185 2.98136 16.4998 6.68475 16.4998H11.1288C14.8322 16.4998 16.3136 15.0185 16.3136 11.3151V9.83374"
    //     stroke="currentColor"
    //     strokeWidth="1.2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
    //     d="M11.8992 2.44182L6.06268 8.27835C5.84047 8.50056 5.61827 8.93756 5.57383 9.25605L5.25534 11.4855C5.13683 12.2928 5.70715 12.8557 6.51449 12.7446L8.74393 12.4262C9.05502 12.3817 9.49202 12.1595 9.72163 11.9373L15.5582 6.10077C16.5655 5.09345 17.0395 3.92317 15.5582 2.44182C14.0768 0.960459 12.9065 1.43449 11.8992 2.44182Z"
    //     stroke="currentColor"
    //     strokeWidth="1.2"
>>>>>>> import-web-develop
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <path
<<<<<<< HEAD
    //     d="M8.89526 4.08778C9.32538 6.84853 11.566 8.9591 14.3467 9.23913"
    //     className="dark:stroke-gray-300 stroke-white-400"
    //     strokeWidth="1.5"
=======
    //     d="M11.0625 3.27881C11.5588 5.04903 12.9438 6.4341 14.7215 6.93776"
    //     stroke="currentColor"
    //     strokeWidth="1.2"
>>>>>>> import-web-develop
    //     strokeMiterlimit="10"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
<<<<<<< HEAD
    // </svg>
=======
    // </svg> TO-DO: remover

    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      className={`shrink-0 ${color}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1284 2.10205L13.8976 3.87131"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.74943 11.6163L4.43896 9.68411L13.049 0.984682C13.5152 0.513644 14.161 1.06035 14.6272 1.53139C15.0934 2.00243 15.514 2.44587 15.0477 2.91691L6.43768 11.6163H4.74943Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.26729 2.13818H3.64684C2.87868 2.13818 2.14203 2.44389 1.59885 2.98805C1.05568 3.53222 0.750488 4.27025 0.750488 5.03982V12.2939C0.750488 13.0635 1.05568 13.8015 1.59885 14.3456C2.14203 14.8898 2.87868 15.1955 3.64684 15.1955H11.6118C13.2121 15.1955 13.7841 13.8898 13.7841 12.2939V8.66686"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
>>>>>>> import-web-develop
  )
}

export default IconEdit
