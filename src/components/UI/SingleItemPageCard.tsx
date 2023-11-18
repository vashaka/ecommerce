/* eslint-disable @next/next/no-img-element */
"use client";

import { useThemeContext } from "@/app/context/theme";
import { Clothe } from "@prisma/client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const SingleItemPageCard = ({ foundItem }: Clothe | any) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { onAddItem, allClothes, setIsCartOpen }: any = useThemeContext();
  const otherItems = allClothes.filter(
    (clothe: Clothe) => clothe.id !== foundItem.id
  );
  const addToCart = async () => {
    try {
      localStorage.setItem("open", "true");
      setIsCartOpen(true);
      onAddItem(foundItem);
      toast(`${foundItem.category.toUpperCase()} Added Successfully`, {
        icon: "🥳 🎉",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10 md:p-0 mt-5 md:mt-10">
      <div className="flex flex-col xl:flex-row">
        <div className="">
          <img
            src={foundItem.image}
            alt="single-item-image"
            className="w-[500px] h-[500px] object-cover"
          />
          <div className="flex md:w-[500px] justify-center mt-1">
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />{" "}
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />{" "}
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />{" "}
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />{" "}
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />{" "}
            <img
              src={foundItem.image}
              alt="single-item-image"
              className="w-[60px] h-[60px] object-cover hover:scale-75 duration-300"
            />
          </div>
        </div>
        <div className="flex flex-col xl:ml-10 py-4 xl:py-0">
          <h1 className="text-2xl text-center xl:text-start">
            {foundItem.title}
          </h1>
          <p className="max-w-[600px] mt-1 xl:mt-0 py-4">{foundItem.desc}</p>
          <div className="flex justify-between items-center">
            <h1 className="mt-4">
              Category:{" "}
              <span className="bg-black text-white px-6 py-2 text-xl text-semibold uppercase rounded-md">
                {foundItem.category}
              </span>
            </h1>
            <div className="flex items-center mt-5">
              {foundItem.oldPrice !== 0 && (
                <h1 className="line-through mr-2">${foundItem.oldPrice}.00</h1>
              )}
              <h1 className="text-red-500">${foundItem.price}.00</h1>
            </div>
          </div>
          <span className="bg-gray-300 w-full h-[1px] my-5"></span>

          <button
            onClick={addToCart}
            className="mt-1 hover:scale-110 duration-300 bg-black text-white px-6 py-2 text-xl text-semibold rounded-md uppercase"
          >
            Add To Bag
          </button>
        </div>
      </div>
      <h1 className="text-center text-3xl font-semibold md:mt-16">
        You May Also Like
      </h1>

      <div className="flex justify-between">
        {/* <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center xl:mx-28 mt-8"> */}

        <div className="marquee">
          <div className={`maylike-products-container track`}>
            {otherItems.map((singleItem: Clothe) => {
              return (
                <div
                  className="mt-10 hover:scale-110 duration-300"
                  key={singleItem.id}
                >
                  <Link href={`/clothes/${singleItem.id}`}>
                    <img
                      src={singleItem.image}
                      alt="singleItem image"
                      className="w-[230px] h-[230px] object-cover"
                    />
                    <h1 className="text-start text-[13px] my-2 font-[500] mx-1">
                      {singleItem.title}
                    </h1>
                    <div className="flex justify-between text-[13px] mx-1">
                      <p className="text-[hsl(0,0%,58%)]">
                        {singleItem.category}
                      </p>
                      <div className="flex">
                        <p className={`${singleItem.oldPrice !== 0 && "mr-3"}`}>
                          ${singleItem.price}
                        </p>
                        {singleItem.oldPrice !== 0 && (
                          <p className="text-red-400 line-through">
                            ${singleItem.oldPrice}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPageCard;
