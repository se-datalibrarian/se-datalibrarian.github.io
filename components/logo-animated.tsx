const AnimatedLogo = () => {
  return (
    <svg viewBox="0 0 229.49 116.67" className="mx-8 sm:mx-32 mb-4">
      <defs>
        <linearGradient id="linear-gradient" x1="-50%" y1="0" x2="150%" y2="100%" gradientTransform="translate(-0.005)">
            <stop offset="0%" stopColor="#E2E8F0"></stop>
            {/* <stop offset="25%" stopColor="#0EA5E9"></stop> */}
            <stop offset="50%" stopColor="#2DD4BF"></stop>
            <stop offset="75%" stopColor="#0EA5E9"></stop>
            <stop offset="100%" stopColor="#E2E8F0"></stop>
            <animateTransform attributeName="gradientTransform"
                              attributeType="XML"
                              type="translate"
                              from="-2"
                              to="0"
                              dur="3s"
                              fill="freeze"
                              repeatCount="1"/>
        </linearGradient>
      </defs>
      <path fill="url(#linear-gradient)" d="M116.67 0v116.67H0L108.66 8.01 116.67 0z M120.44 67.9h11.67c13.64 0 21.45 7.87 21.45 22.72s-7.81 23.13-21.09 23.13h-12zm11.21 40.1c9.57 0 14.66-6 14.66-17.4s-5.09-17-14.66-17h-4.18V108zM162 67.9h7v39.92h22.06v5.93H162zM196 107.25l4.12-4.68a19.69 19.69 0 0013.11 5.25c5.8 0 9-2.58 9-6.14 0-4.32-3.35-5.52-7.89-7.37l-6.47-2.74c-4.68-1.78-9.81-5-9.81-11.57 0-6.89 6.43-12.1 15.48-12.1A21 21 0 01228 73.45l-3.63 4.32a16.54 16.54 0 00-11.07-3.94c-4.83 0-8.07 2.16-8.07 5.77 0 3.84 4 5.24 8 6.76l6.21 2.64c5.75 2.16 10.05 5.39 10.05 11.86 0 7.09-6.21 12.89-16.61 12.89a24.57 24.57 0 01-16.88-6.5z"/>
      <path fill="#E5E7EB" d="M42 107.25l4.13-4.68a19.69 19.69 0 0013.1 5.25c5.8 0 9-2.58 9-6.14 0-4.32-3.35-5.52-7.89-7.37l-6.47-2.74c-4.68-1.78-9.82-5-9.82-11.57 0-6.89 6.43-12.1 15.48-12.1A21 21 0 0174 73.45l-3.63 4.32a16.59 16.59 0 00-11.07-3.94c-4.82 0-8.07 2.16-8.07 5.77 0 3.84 4 5.24 8 6.76L65.45 89c5.75 2.16 10 5.39 10 11.86 0 7.09-6.21 12.89-16.6 12.89a24.6 24.6 0 01-16.85-6.5zM83.74 67.9h28.89v5.93H90.77v13h18.49v5.93H90.77v15.06h22.56v5.93H83.74z"/>
    </svg>
  )
}

export default AnimatedLogo