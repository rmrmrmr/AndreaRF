"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel({imageName, numOfSlides}:{imageName:string, numOfSlides:number}) {
  const [slide, setSlide] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = slide === 1;
    const newSlide = isFirstSlide ? numOfSlides : slide - 1;
    setSlide(newSlide);
  };

  const nexSlide = () => {
    const isLastSlide = slide === numOfSlides;
    const newSlide = isLastSlide ? 1 : slide + 1;
    setSlide(newSlide);
  };

  // const createIndicators = () => {
  //   const sld = [];
  //   for(let i = 1; i <= numOfSlides; i++){
  //     if(slide === i) {
  //       sld.push(<p className="text-[#aa3632]">.</p>)
  //     } else {
  //       sld.push(<p className="text-[#383427]">.</p>)
  //     }
  //     return sld;
  //   }
  // }

  return (
    <div className="w-[320px] h-[244px] duration-500 relative flex flex-col items-center justify-between">
      <Image
        src={`/${imageName}${slide}.jpg`}
        alt="Image #"
        width={320}
        height={240}
        className="max-h-[240px] max-w-[320px]"
      />
      <div
        className="absolute top-[104px] left-0 text-[#e6e0d3]"
        onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div
        className="absolute top-[104px] right-0 text-[#e6e0d3]"
        onClick={nexSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex h-1 text-4xl justify-center items-center gap-2 select-none" id='carouselInd'>
        {slide === 1 && <p className="text-[#aa3632]">.</p>}
        {slide !== 1 && <p className="text-[#383427]">.</p>}
        {slide === 2 && <p className="text-[#aa3632]">.</p>}
        {slide !== 2 && <p className="text-[#383427]">.</p>}
        {slide === 3 && <p className="text-[#aa3632]">.</p>}
        {slide !== 3 && <p className="text-[#383427]">.</p>}
        {slide === 4 && <p className="text-[#aa3632]">.</p>}
        {slide !== 4 && <p className="text-[#383427]">.</p>}
        {/* {createIndicators()} */}
      </div>
    </div>
  );
}
