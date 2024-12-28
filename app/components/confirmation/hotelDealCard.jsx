import Image from 'next/image'
import React from 'react'

export default function HotelDealCard({imageSrc,title,price,description}) {
  return (
    <div className="border-2 shadow-md rounded-xl max-w-[400px] my-8">
          <Image
            src={imageSrc}
            alt="flight deal destination"
            width={400}
            height={247}
            className="rounded-t-xl"
          ></Image>
          <div className="mx-6 my-4">
          <div className="mb-1 flex justify-between ">
              <span className="text-grey-600 text-h4 mr-1">{title}</span>
            <span className="text-grey-600 text-h4">${price}</span>
            </div>
            <span className="text-grey-400">{description}</span>
          </div>
    
        </div>
  )
}
