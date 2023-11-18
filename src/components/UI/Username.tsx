"use client";

import React from "react";
import { useThemeContext } from "@/app/context/theme";

const Username = () => {
  const { userData }: any = useThemeContext();

  return (
    <>
      {userData?.username?.length > 0 && (
        <h1 className="text-6xl typing-text font-[200] mb-4">
          Hello <span className="">{userData?.username}</span>
        </h1>
      )}
    </>
  );
};

export default Username;
