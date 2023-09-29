import React from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/style";
function DropDown({ categoriesData, setDropDown }) {
  const router = useRouter();
  const handleSubmit = (i) => {
    router.push(`/products?categories=${i.title}`);
    setDropDown(false);
    // window.location.reload();
  };
  return (
    <div className="pb-4 w-[270px] bg-[#fff] absolute top-16 left-0 z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div
            key={index}
            className={`${styles.noramlFlex}`}
            onClick={() => handleSubmit(item)}
          >
            <img
              src={item.image_Url}
              alt=""
              className="h-[25px] w-[25px] object-contain ml-[10px] select-none"
            />
            <h3 className="m-3 cursor-pointer select-none">{item.title}</h3>
          </div>
        ))}
    </div>
  );
}

export default DropDown;
