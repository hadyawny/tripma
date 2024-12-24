'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavigationButton({text,color,bgColor,borderColor,destination,func, disabled = false,}) {
    const router = useRouter();

    const handleClick = () => {

      if (!disabled) {
        if (func) func();
        if (destination) router.push(destination);
      }
    }
    
  return (<div>{
    disabled ? <button disabled={true} className={`text-lg text-grey-400 bg-disabledBg border-grey-800 ${borderColor} px-5 py-3 border rounded-lg `} type='button'>
        {text}
      </button>
      :

      <button className={`text-lg ${color} ${bgColor} ${borderColor} px-5 py-3 border rounded-lg `} onClick={handleClick} type='button'>
        {text}
      </button>}
      </div>
  )
}

