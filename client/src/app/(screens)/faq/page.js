"use client";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer/Footer";
import styles from "@/app/styles/style";
import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
function FaqPage() {
  return (
    <div>
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
}

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-400 mb-8">FAQ</h2>
      <div className="mx-auto space-y-4">
        {/*Single FAQ*/}
        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(1)}
          >
            <span className="text-lg font-medium text-gray-900">
              How do I track my Order ?
            </span>
            {activeTab === 1 ? <AiOutlineClose /> : <BsChevronRight />}
          </button>
          {activeTab === 1 && (
                <div className="mt-4">
                    <p className="text-base text-gray-500">
                        We typically and ship orders within 1-2 bussiness days.
                        Depending on your Locations, it can take an additional 2-7 days
                        for your order to arrive.
                    </p>
                </div>
            ) }
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
