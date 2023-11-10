"use client";
import {useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSeller, loadUser } from "./redux/actions/user";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import BestDeals from "./components/Home/BestDeals";
import FeatureProducts from "./components/Home/FeatureProducts";
import Events from "./components/Home/Events";
import SponSored from "./components/Home/SponSored";
import Footer from "./components/Footer/Footer";
import { useRouter } from "next/navigation";
export default function Home() {
  const [shouldRender, setShouldRender] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const loading = useSelector((state) => state.user.loading);
  const router = useRouter();
  useLayoutEffect(() => {
    dispatch(loadUser());
    dispatch(loadSeller());
    console.log(
      "The Value of IS Authenicated is on HOme Page",
      isAuthenticated
    );
    if (isAuthenticated === false) {
      router.replace("/login");
    } else {
      setShouldRender(true);
    }
  }, []);

  console.log("Loader User State===", loading);
  if (loading) return <>Loading</>;
  if (!shouldRender) return null;
  return (
    <>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeatureProducts />
      <SponSored />
      <Footer />
    </>
  );
}
