import styles from "@/app/styles/style";
import React from "react";
import { AiOutlineCamera } from "react-icons/ai";

function ProfileContent({ active }) {
  return (
    <div className="w-full">
      {active === 1 && (
        <>
          <div className="w-full flex justify-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="!h-[150px] !w-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt="Profile"
              />
              <div className="h-[30px] w-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <AiOutlineCamera size={16} />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form className="">
              <div className="w-full flex pb-3">
                <div className="w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%]`}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileContent;
