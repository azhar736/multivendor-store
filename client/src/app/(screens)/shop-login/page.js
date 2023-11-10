"use client";
import React, { useLayoutEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/style";
import Link from "next/link";
import axios from "axios";
import useMakeToast from "../../hooks/Toast";
import { useDispatch } from 'react-redux';
const Base_URL = process.env.NEXT_PUBLIC_API_URL;
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/user";
function ShopLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const makeToast = useMakeToast();
  const dispatch = useDispatch();
  const router = useRouter();
    const {isAuthenticated} = useSelector((state)=>state.user);
    const loading = useSelector((state) => state.user.loading);
  useLayoutEffect(() => {
    setVisible(false); // ensure initial client-side state matches server-side state
    console.log("The value is Authenticated is on Login Page",isAuthenticated);
    if(isAuthenticated === true){
      router.replace("/");
    }else{
      setShouldRender(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await axios
      .post(
        `${Base_URL}/shop/login-shop`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        // router.push("/");
        makeToast("Login successful!", "success");
        dispatch(loadUser());
        setEmail("");
        setPassword("");
        // window.location.reload(true);
      })
      .catch((err) => {
        console.log("The Error", err);
        makeToast(err.response.data.message, "error");
      });
  };
  console.log("Loader User State===",loading);
  if(loading) return <>Loading</>;
  if (!shouldRender) return null;
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold font-Roboto text-gray-900">
          Login to your shop
        </h2>
      </div>
      <div className="mt-8 flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white w-[90%] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    size={25}
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={25}
                    className="absolute right-2 top-2 cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="/"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border
                 border-transparent text-sm font-medium rounded-md text-white bg-blue-600
                  hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account ?</h4>
              <Link href="/shop-create" className="text-blue-600 pl-2">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShopLogin;
