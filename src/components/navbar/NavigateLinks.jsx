"use client";
import React, { useState } from "react";
import Link from "next/link";

function NavigateLinks() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={`flex absolute flex-col top-0 md:bg-transparent w-full 
          justify-start  bg-white
        md:h-auto md:w-auto md:flex-row md:relative md:left-0 md:justify-center 
          items-center overflow-hidden ease-in-out duration-500 transition-all
        ${isOpen ? `left-0 h-[98vh]` : ` left-[-100%]`}`}
      >
        <Link
          href=""
          className="font-semibold text-xl capitalize text-lochmara-950 link hover:text-lochmara-600"
        >
          service
        </Link>
        <Link
          href="/"
          className="font-semibold text-xl capitalize text-lochmara-950 link hover:text-lochmara-600"
        >
          about
        </Link>
        <Link
          href="/"
          className="font-semibold text-xl capitalize text-lochmara-950 pt-1 pb-[7px] px-2
          border-[2px] border-lochmara-600 rounded-md hover:bg-lochmara-900 hover:text-lochmara-50 
          ease-in-out duration-300 hover:border-lochmara-900"
        >
          Contact
        </Link>

        {isOpen && (
          <div
            className="md:hidden fixed right-2 top-3"
            onClick={() => {
              switch (isOpen) {
                case true:
                  setIsOpen(false);
                  break;
                default:
                  setIsOpen(true);
                  break;
              }
            }}
          >
            <span
              className={`w-7 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
            ></span>
            <span
              className={`w-9 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
            ></span>
            <span
              className={`w-7 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
            ></span>
          </div>
        )}
      </div>
      {isOpen ? (
        ``
      ) : (
        <div
          className="pt-2 md:hidden"
          onClick={() => {
            switch (isOpen) {
              case true:
                setIsOpen(false);
                break;
              default:
                setIsOpen(true);
                break;
            }
          }}
        >
          <span
            className={`w-7 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
          ></span>
          <span
            className={`w-9 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
          ></span>
          <span
            className={`w-7 flex flex-col items-center mb-[7px] h-[3px]
             bg-denim-500`}
          ></span>
        </div>
      )}
    </div>
  );
}

export default NavigateLinks;
