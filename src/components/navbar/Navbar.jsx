import React from "react";
import NavigateLinks from "./NavigateLinks";
import Link from "next/link";
function Navbar() {
  return (
    <nav
      className={`nav w-full m-auto px-2 py-1 
      flex items-center justify-between top-0 `}
    >
      <Link
        href="/"
        className="text-4xl font-semibold font-serif text-denim-600"
      >
        BK
      </Link>
      <NavigateLinks />
    </nav>
  );
}

export default Navbar;
