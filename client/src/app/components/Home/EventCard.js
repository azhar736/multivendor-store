import styles from "@/app/styles/style";
import React from "react";
import CountDown from "./CountDown";

function EventCard() {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className="w-full lg:w-[50%] m-auto">
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt="img"
          loading="lazy"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className={`${styles.heading}`}>IPhone 14Pro max 8/256 DB</h2>
        <p className="text-black text-[16px] font-normal leading-6 font-Roboto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).
        </p>
        <div className="flex py-2 justify-between">
            <div className="flex">
                <h5 className="font-medium text-[18px] text-[#d55b45] pr-3 line-through">
                    1099$
                </h5>
                <h5 className="font-bold text-[25px] text-[#333] font-Roboto">
                  999$
                </h5>
            </div>
            <span className="pr-3 font-normal text-[17px] text-[#44a55e]">120 Sold</span>
        </div>
        <CountDown />
      </div>
    </div>
  );
}

export default EventCard;
