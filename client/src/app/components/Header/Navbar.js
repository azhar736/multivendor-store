"use client";
import { navItems } from "../../static/data";
import styles from "@/app/styles/style";
import Link from "next/link";
import React from "react";

function Navbar({ active }) {
  return (
    <div className={`${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex">
            <Link
              href={item.url}
              className={`${
                active === index + 1
                  ? "text-[#17dd1f] font-[500]"
                  : "text-[#fff] font-[500] px-6 cursor-pointer"
              }`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Navbar;
