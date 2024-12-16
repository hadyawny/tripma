import React from "react";
import ReviewCard from "./reviewCard";

export default function Reviews() {
  return (
    <div className="mt-16 mb-20">
      <div className="flex justify-center mb-10 mt-20 ">
        <span className="text-grey-600 text-h3">
          What <span className="text-purpleBlue">Tripma</span> users are saying
        </span>
      </div>
      <div className="flex gap-32 justify-center">
        <ReviewCard
          date={"April 2019"}
          location={"Seoul, South Korea "}
          name={"Yifei Chen"}
          pictureSrc={"/avatar1.png"}
          rating={5}
          reviewContent={
            "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me"
          }
        />
        <ReviewCard
          date={"February 2017"}
          location={"Honolulu, Hawaii"}
          name={"Kaori Yamaguchi"}
          pictureSrc={"/avatar2.png"}
          rating={4}
          reviewContent={
            "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I'm so glad we tried it out! The process was easy and"
          }
        />
        <ReviewCard
          date={"April 2019"}
          location={"Berlin, Germany"}
          name={"Anthony Lewis"}
          pictureSrc={"/avatar3.png"}
          rating={5}
          reviewContent={
            "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I'd give it a try. It was my first time using Tripma, but I'd definitely recommend it to a friend and use it for"
          }
        />
      </div>
    </div>
  );
}
