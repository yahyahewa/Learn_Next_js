import React from "react";

function categorey({ scrollToRight }) {
  return (
    <div
      className="col-span-2 flex flex-col
       gap-y-1 items-start pl-3
           justify-center font-serif"
    >
      <h1
        className="text-xl gap-x-2 capitalize 
       text-denim-900 whitespace-normal"
      >
        Jewelry & Accessories
      </h1>
      <h1
        className="flex justify-center items-center gap-x-1
       text-denim-800 capitalize"
      >
        <div className="hover:ml-2 ease-in-out duration-300 lg:hidden">
          <svg
            onClick={scrollToRight}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6  "
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </h1>
      <h1 className="text-lg mt-1 capitalize see-more text-slate-500">
        See more
      </h1>
    </div>
  );
}

export default categorey;
