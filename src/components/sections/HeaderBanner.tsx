import React from "react";
import Header from "../UI/Header";
import Image from "next/image";
import WomanBanner from "/public/image-product.png";
import Username from "../UI/Username";

const HeaderBanner = () => {
  return (
    <div className="h-full w-full bg-gray-100">
      <div className="flex md:w-9/12 sm:w-3/4 m-auto py-6 flex-col">
        <Header />

        <span className="bg-gray-300 w-full h-[1px] my-5"></span>
        <ul className="justify-between text-[14px] font-light hidden xl:flex">
          <li className="hover:opacity-50 cursor-pointer">
            jewerly & Accessories
          </li>
          <li className=" hover:opacity-50 cursor-pointer">Clothing & Shoes</li>
          <li className=" hover:opacity-50 cursor-pointer">Home & Living</li>
          <li className=" hover:opacity-50 cursor-pointer">Wedding & liarty</li>
          <li className=" hover:opacity-50 cursor-pointer">
            Toys & Entertainment
          </li>
          <li className=" hover:opacity-50 cursor-pointer">
            Art & Collectibles
          </li>
          <li className=" hover:opacity-50 cursor-pointer">
            Craft Supplies & Tools
          </li>
        </ul>

        <div className="lg:grid lg:grid-cols-2 mt-5 xl:mt-20">
          <div className="lg:w-2/3 text-center lg:text-start flex flex-col justify-center">
            <Username />
            <h1 className="text-6xl font-[200]">Collections</h1>
            <div className="hidden justify-center md:flex lg:justify-normal">
              <p
                className="text-xl mt-5 font-[200] max-w-32 mx-2 md:mx-0"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                you can explore ans shop many different collection
                <br /> from various barands here.
              </p>
            </div>

            <p className="text-xl mt-5 font-[200] max-w-32 mx-2 md:mx-0 md:hidden">
              you can explore ans shop many different collection from various
              barands here.
            </p>
            <div className="flex justify-center lg:justify-normal">
              <button className="bg-black px-6 lg:my-10 my-4 py-2 text-gray-300 text-md flex text-center items-center justify-center w-[200px] lg:m-px rounded-md">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(209 213 219)"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mr-2 mt-0.2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src={WomanBanner} alt="woman banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
