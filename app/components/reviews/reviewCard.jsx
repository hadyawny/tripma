import Image from "next/image";
import React from "react";

export default function ReviewCard({
  name,
  pictureSrc,
  rating,
  location,
  date,
  reviewContent,
}) {
    const stars = [0, 1, 2, 3, 4];

  return (
    <div className="flex p-4">
      <div className="mr-4 ">
        <Image
          src={pictureSrc}
          alt="profile picture"
          width={48}
          height={48}
          
        ></Image>
      </div>
      <div className="max-w-[400px]">
        <p className="text-grey-600 text-h4">{name}</p>
        <p className="text-grey-300 text-lg">
          {" "}
          <span className="text-grey-600">{location}</span> |{" "}
          <span className="text-grey-600">{date}</span>
        </p>
        <div className="flex">
          {stars.map((index) => (
            <Image
            key={index}
              src={index < rating ? "/Starfilled.png" : "/Starempty.png"}
              alt="Star"
              width={18}
              height={18}
              className="mr-2"
            />
          ))}
        </div>
        <p className="text-lg text-grey-900">{reviewContent} <span className="text-purpleBlue">Read more...</span></p>
      </div>
    </div>
  );
}
