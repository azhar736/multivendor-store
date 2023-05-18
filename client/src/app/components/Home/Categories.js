"use client";
import { useRouter } from "next/navigation";
import { brandingData, categoriesData } from "../../static/data";
import styles from "@/app/styles/style";

function Categories() {
  const router = useRouter();
  const handleSubmit = (i) => {
    router.push(`/products?category=${i.title}`);
  };
  return (
    <>
      {/*Branding Section */}
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((item, index) => (
              <div className="flex items-start" key={index}>
                {item.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/*Category Section */}
      <div
        className={`${styles.section} bg-white p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((item, index) => (
              <div
                className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                key={item.id}
                onClick={() => handleSubmit(item)}
              >
                <h5
                  className={`text-[18px] font-normal font-Roboto leading-[1.3]`}
                >
                  {item.title}
                </h5>
                <img
                  src={item.image_Url}
                  alt=""
                  className="w-[120px] object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
