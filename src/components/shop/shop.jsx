import React from "react";
import { useRouter } from "next/router";
function shop() {
  const a = useRouter();
  console.log(a);
  return <div>shopaaaa</div>;
}

export default shop;
