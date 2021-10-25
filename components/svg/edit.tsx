import { FC } from 'react'

export const Edit: FC<{ color: string }> = ({ color }) => (
  <svg 
    width="28" 
    height="29" 
    viewBox="0 0 28 29" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
  <path 
    d="M2.15594 26.5941L7.17504 25.2492L3.50081 21.575L2.15594 26.5941Z" 
    fill={color}  
  />
  <rect 
    x="18.4194" 
    y="6.08798" 
    width="6" 
    height="19" 
    transform="rotate(45 18.4194 6.08798)" 
    fill={color} 
  />
  <path 
    d="M20.7227 3.78467L22.3085 2.19888C23.0896 1.41783 24.3559 1.4178 3 25.1369 2.19888L26.5511 3.61309C27.3322 4.39414 27.3322 5.66047 26.5511 6.44152L24.9654 8.02731L20.7227 3.78467Z" 
    fill={color} 
  />
</svg>
)