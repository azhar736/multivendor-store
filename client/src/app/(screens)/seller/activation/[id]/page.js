"use client";

import axios from "axios";
import { useEffect, useState } from "react";
const Base_URL = process.env.NEXT_PUBLIC_API_URL;
const SellerActivationPage = ({ params }) => {
  const activation_token = params.id;
  const [error, setError] = useState(false);
  useEffect(() => {
    if (activation_token) {
      const activateEmail = async () => {
        try {
          console.log("The Token for activation", activation_token);
          const response = await axios.post(`${Base_URL}/shop/activation`, {
            activation_token,
          });
          console.log(response);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };
      activateEmail();
    }
  }, []);

  return (
    <div className="h-[100vh] w-full flex items-center justify-center">
      {error ? (
        <p>Your Token is expired!</p>
      ) : (
        <p>Your Shop has been created successfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
