/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Clothe } from "@/interface";
import { useThemeContext } from "@/app/context/theme";

const CartSection = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const { cartItems, removeItem, isCartOpen, setIsCartOpen }: any =
    useThemeContext();

  const onRemoveItem = (item: Clothe) => () => {
    removeItem(item);
    window.location.reload();
  };

  useEffect(() => {
    let priceSum = 0;
    for (let cartItem of cartItems) {
      priceSum += cartItem.price;
    }
    setTotalPrice(priceSum);
  }, [cartItems]);

  return (
    <>
      {isCartOpen && (
        <div className="flex z-50">
          <div className="fixed right-0 w-[200px] h-full bg-white overflow-y-auto overflow-x-hidden z-50 border border-1 border-l-2 border-gray-200">
            <div className="fixed justify-center bg-white w-[180px] z-10">
              <div
                onClick={() => {
                  localStorage.removeItem("open");
                  setIsCartOpen(false);
                }}
                className="hover:cursor-pointer hover:text-gray-500 absolute mt-[17px] right-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-sm mt-4 text-center">Subtotal</p>
              <p className="text-[#B12704] font-[600] text-center pb-2">
                ${totalPrice}.00
              </p>
              <span className="bg-gray-400 absolute w-[180px] h-[1px]"></span>
            </div>

            <div className="mt-20">
              {cartItems?.map((item: Clothe) => {
                return (
                  <div className="" key={item.id}>
                    <div className="mt-7 px-2">
                      <h1 className="text-center text-sm">{item?.title}</h1>
                      <img
                        src={item?.image}
                        alt="item-image"
                        className="object-cover mt-2"
                      />
                      <p className="text-center text-sm my-4 font-[600] text-black">
                        ${item?.price}.00
                      </p>
                      <div
                        onClick={onRemoveItem(item)}
                        className="flex justify-center cursor-pointer hover:text-gray-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="bg-gray-400 z-2 absolute text-center w-[180px] h-[1px] my-2"></span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSection;
