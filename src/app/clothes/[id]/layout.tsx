import Header from "@/components/UI/Header";
import React from "react";

const layout = ({ children }: any) => {
  return (
    <div>
      <div className="flex lg:w-9/12 sm:w-3/4 m-auto py-6 flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default layout;
