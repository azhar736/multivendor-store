"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";
import Categories from "./components/Home/Categories";
import BestDeals from "./components/Home/BestDeals";
import FeatureProducts from "./components/Home/FeatureProducts";
import Events from "./components/Home/Events";
import SponSored from "./components/Home/SponSored";
import Footer from "./components/Footer/Footer";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

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
