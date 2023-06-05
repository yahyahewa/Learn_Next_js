import Image from "next/image";
import React from "react";
function ShopCard({ image, name, link }) {
  return (
    <div
      className={`w-[150px] h-28 flex flex-col
     items-center justify-start`}
    >
      <img
        src={
          "https://i.etsystatic.com/13162057/c/1176/1176/98/0/il/4ad6b9/1718422575/il_300x300.1718422575_l51c.jpg"
        }
        // width={90}
        // height={90}
        alt="shop image"
        className="rounded-full 
        shadow-lg border w-[90px] h-[90px]"
      />
      <h1>{name}</h1>
    </div>
  );
}

export default ShopCard;
