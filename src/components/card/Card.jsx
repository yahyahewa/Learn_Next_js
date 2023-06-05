import React from "react";
import Review from "./Review";
// import l from "../../src/assets/images/i (0).jpg";
// import l1 from "../../src/assets/images/i (0).jpg";
function Card({ product }) {
  return (
    <section
      className="cards-content flex justify-evenly
     items-start m-auto mt-12 flex-wrap w-full max-w-[1200px]"
    >
      {product.map((value, index) => {
        return (
          <article
            key={index}
            className="font-serif card m-1 w-[95%] sm:w-[47%] md:w-[32%] lg:w-[24%] box-border 
        float-left text-center rounded-3xl border
          cursor-pointer pt-1 hover:mt-0 ease-in-out duration-300 overflow-hidden bg-white"
          >
            <div className="w-[95%] h-[190px] overflow-hidden rounded-xl text-center m-auto mt-1 block relative">
              {/* //----------------- image ------------------ */}
              <img src={value} className="h-full w-full object-cover" />
              <span
                className="absolute left-1 bottom-1 font-sans font-bold px-1 py-[2px]
               bg-green-700 rounded-md text-white"
              >
                23%
              </span>
            </div>
            {/* //----------------- product name ------------------ */}
            <h1
              className="pl-2 text-[17px] text-center font-bold
             pt-2 text-denim-800 overflow-hidden"
            >
              shooes and woman t-shert
            </h1>
            {/* //----------------- pric and discount ------------------ */}
            <div className="flex justify-evenly">
              <h1
                className="text-[18px] font-sans font-bold
               text-center text-denim-500 m-0"
              >
                {1234}$
              </h1>
              <h1
                className="text-[18px] font-sans font-bold
               text-center text-denim-900 m-0 line-through"
              >
                {1400}$
              </h1>
            </div>
            <p className="text-center text-slate-500 py-0 px-2">
              Lorem ipsum dolor sit amet consectetur .....
            </p>
            <Review />
            <div className="flex">
              <button
                className="flex justify-center items-center gap-x-1 text-white text-md w-full
             p-2 outline-none mt-2 bg-denim-600 "
              >
                Add To Cart
              </button>
              <button
                className="flex justify-center items-center gap-x-1 text-denim-900 text-md w-full
             p-2 outline-none mt-2 bg-denim-100 "
              >
                Show More
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Card;
