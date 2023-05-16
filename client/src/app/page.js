"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <div>
        <h1 className="text-red-500 text-3xl font-bold">Hello world</h1>
      </div>
    </>
  );
}
