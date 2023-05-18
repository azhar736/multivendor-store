"use client";
import styles from "@/app/styles/style";
import Link from "next/link";
function Hero() {
  return (
    <div
      className={`relative min-h-[70px] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] font-Roboto capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-2 text-[16px] font-[400] text-[#000000ba] font-Poppins">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          facilis magni neque <br /> vitae libero debitis id cum aut veritatis
          atque temporibus nostrum magnam molestiae quam <br /> officia
          incidunt, placeat cupiditate dolore!
        </p>
        <Link href="/products" className="inline-block">
          <div className={`${styles.button} mt-5 hover:opacity-[85%]`}>
            <span className="text-[#fff] font-Poppins text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
