"use client";
import {  useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function isSeller(Component) {
  return function IsAuth(props) {
    const {isSeller} = useSelector((state)=>state.seller);
    // const auth = isAuthenticated;
    console.log("The auth value is ", isSeller);
    useLayoutEffect(() => {
      if (!isSeller) {
        return redirect("/shop-login");
      }
    }, []);

    return <Component {...props} />;
  };
}