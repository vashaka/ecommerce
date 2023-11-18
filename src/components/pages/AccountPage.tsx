"use client";
import React from "react";
import axios from "axios";
import { useThemeContext } from "@/app/context/theme";
import { User } from "@/interface";

const AccountPage = () => {
  const { userData }: any = useThemeContext();

  const logoutHandler = async () => {
    await axios.get("http://localhost:3000/api/users/logout");
    localStorage.removeItem("user");
    window.location = "/";
  };
  return (
    <div className="">
      <h1 className="text-center text-2xl font-bold">
        Welcome Back {userData?.username}
      </h1>

      <div className="flex justify-center w-full mt-1">
        <button
          onClick={logoutHandler}
          className="bg-black px-6 py-2 text-gray-300 text-md w-[200px] lg:m-px rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
