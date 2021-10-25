import { FC } from 'react'

export const Delete: FC<{ color: string }> = ({ color }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect 
      x="3.53553" 
      y="1.52588e-05" 
      width="28.8249" 
      height="5" 
      rx="1" 
      transform="rotate(45 3.53553 1.52588e-05)" 
      fill={color} />
    <rect 
      x="1.14441e-05" 
      y="20.3823" 
      width="28.8249" 
      height="5" 
      rx="1" 
      transform="rotate(-45 1.14441e-05 20.3823)" 
      fill={color} 
    />
  </svg>
)