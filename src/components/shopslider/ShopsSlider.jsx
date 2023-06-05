"use client";
import React, { useState, useEffect, useRef } from "react";
import Card from "./ShopCard";
import "./style.css";
function ShopsSlider() {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const [stopSlid, setStop] = useState(false);
  const timeoutRef = useRef(null);

  ////////////////////////////////////////
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  ////////////////////////////////////////
  useEffect(() => {
    resetTimeout();
    if (!stopSlid) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index, stopSlid]);
  ///////////////////////////////////////////////
  const colors = ["#", "#"];
  //////////////////////////////////////////////
  return (
    <div className="m-auto overflow-hidden w-[95%] max-w-[1200px] mt-10">
      <div
        onMouseMove={() => {
          setStop(true);
        }}
        onMouseLeave={() => {
          setStop(false);
        }}
        className="whitespace-nowrap ease-in-out duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div
            className="inline-block h-[200px] w-full"
            key={index}
            style={{ backgroundColor }}
          >
            <div className="flex h-full w-full justify-evenly items-center">
              {[1, 2, 3, 4, 5].map((indc) => {
                return <Card name={indc} key={indc} />;
              })}
            </div>
          </div>
        ))}
      </div>
      {/* ///---------------- dot sliders ---------------/// */}
      <div className="text-center">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`text-center rounded-full h-3 w-3 bg-slate-500 inline-block cursor-pointer mt-2 mx-1 ${
              index === idx ? " bg-slate-900" : ""
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ShopsSlider;
