import { loadUser } from "@/app/redux/actions/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import { TbAddressBook } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Base_URL = process.env.NEXT_PUBLIC_API_URL;
function ProfileSidebar({ active, setActive }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleInbox = () => {
    setActive(4);
    router.push("/inbox");
  };

  const handleLogout=()=>{
    axios.get(`${Base_URL}/user/logout`,{withCredentials:true}).then((res)=>{
     toast.success(res?.data?.message);
     router.replace("/login");
     dispatch(loadUser());
    //  window.location.reload(true);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 1 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block `}
        >
          Profile
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 2 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Orders
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 3 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Refunds
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={handleInbox}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 4 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Inbox
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 5 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Track Order
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <AiOutlineCreditCard size={20} color={active === 6 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 6 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Payment Methods
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 7 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Address
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(8) || handleLogout()}
      >
        <AiOutlineLogout size={20} color={active === 8 ? "red" : ""} />
        <span
          className={`pl-3 ${
            active === 8 ? "text-[red] font-Poppins font-medium" : " "
          } hidden 800px:block`}
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default ProfileSidebar;
