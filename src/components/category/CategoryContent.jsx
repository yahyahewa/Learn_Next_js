"use client";
import React, { useRef } from "react";
import Categorey from "./categorey";
import "./categorey.style.css";
function CategoryContent() {
  const scrollContainerRef = useRef(null);
  function scrollToRight() {
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.scrollWidth * 0.25,
    });
  }
  const images = [
    "https://i.etsystatic.com/20474780/r/il/4103fa/4898490938/il_340x270.4898490938_dhb6.jpg",
    "https://i.etsystatic.com/38091196/r/il/06d288/4893792033/il_340x270.4893792033_kqju.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    ,
    "https://i.etsystatic.com/12794159/r/il/2eb960/1684539712/il_340x270.1684539712_ot78.jpg",
    "https://i.etsystatic.com/27234269/c/1399/1112/843/675/il/80b2d8/4874024715/il_680x540.4874024715_folj.jpg",
    ,
    "https://i.etsystatic.com/22537583/r/il/9e592b/4313965707/il_340x270.4313965707_218p.jpg",
    "https://i.etsystatic.com/17725283/r/il/73d9ef/1676042173/il_340x270.1676042173_r6ug.jpg",
  ];
  return (
    <div
      ref={scrollContainerRef}
      className="w-[95%] border rounded-lg py-2 px-2 bg-white
     scroll-smooth max-w-[1200px] categorey-main-contetnt m-auto mt-8"
    >
      <section
        className="p-1
      categorey-content 
     flex justify-center items-center 
  m-auto max-w-[1200px] rounded-2xl overflow-hidden"
      >
        {/* {--------------------categorey name with image -------------------} */}
        <section
          className="grid grid-cols-6 grid-rows-2 gap-4
         w-full h-full"
        >
          {/* {-------------------- categorey name ----------------------} */}
          <Categorey scrollToRight={scrollToRight} />
          {/* {------------------- image of products categorey -----------------------} */}
          {images.map((value, index) => {
            return (
              <img
                key={index}
                className={`rounded-lg hover:shadow-lg ease-in-out duration-300 ${
                  index === 2 ? `col-span-2 row-span-2 h-full` : ``
                }`}
                src={value}
              />
            );
          })}
          {/* {------------------------------------------} */}
        </section>
      </section>
    </div>
  );
}

export default CategoryContent;
