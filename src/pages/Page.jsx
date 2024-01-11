import React from "react";
import Home from "./Home";
import MyCart from "./MyCart";
import { useSelector } from "react-redux";
const Page = () => {
  const page = useSelector((state) => state.pages);
   
  return (
    <div> 
      {page.home ? <Home /> : <MyCart />} 
    </div>
  ); //page .home คือ if สั้น
};

export default Page;
