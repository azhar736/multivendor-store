import styles from "@/app/styles/style";
import React, { useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import AllOrders from "./AllOrders";
import AllRefundOrders from "./AllRefundOrders";
import TrackOrders from "./TrackOrders";
import PaymentMethod from "./PaymentMethod";
import UserAddress from "./UserAddress";

function ProfileContent({ active }) {
  const { user } = useSelector((state) => state.user);
  console.log("The user we got from Global state is ", user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNo, setPhoneNo] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full">
      {/*Profile Page*/}
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
            <form className="" onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full block 800px:flex pb-3">
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="email"
                    className={`${styles.input} !w-[95%] mb-3 800px:mb-0`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full block 800px:flex pb-3">
              <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Zip Code</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full block 800px:flex pb-3">
              <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Address 1</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-full 800px:w-[50%]">
                  <label className="block pb-2">Address 2</label>
                  <input
                    type="address"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[200px] sm:w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rouned-[4px] mt-8 cursor-pointer`}
                required
                value="update"
                type="submit"
              />
            </form>
          </div>
        </>
      )}
      {/*Order Page*/}
      {active === 2 && <AllOrders />}
      {/*Refund Page */}
      {active === 3 && <AllRefundOrders />}
      {/* Track Order*/}
      {active === 5 && <TrackOrders />}
      {/*Payment Method*/}
      {active === 6 && <PaymentMethod />}
      {/*User Address */}
      {active === 7 && <UserAddress />}
    </div>
  );
}

export default ProfileContent;
