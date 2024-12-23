'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavigationButton({text,color,bgColor,borderColor,destination,func}) {
    const router = useRouter();

    const handleClick = () => {

        router.push(destination);
        func();
    }

  return (
    <button className={`text-lg ${color} ${bgColor} ${borderColor} px-5 py-3 border rounded-lg `} onClick={handleClick}>
        {text}
      </button>
  )
}

