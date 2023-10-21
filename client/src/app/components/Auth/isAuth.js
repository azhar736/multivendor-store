"use client";
import {  useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const {isAuthenticated} = useSelector((state)=>state.user);
    // const auth = isAuthenticated;
    console.log("The auth value is ", isAuthenticated);
    useLayoutEffect(() => {
      if (!isAuthenticated) {
        return redirect("/login");
      }
    }, []);

    return <Component {...props} />;
  };
}