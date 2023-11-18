/* eslint-disable @next/next/no-img-element */
"use client";

import { Clothe } from "@/interface";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ClothesCard from "../UI/ClothesCard";
import { useThemeContext } from "@/app/context/theme";

const ClothesSection = () => {
  const { clothes, setClothes }: any = useThemeContext();
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("all products");

  const filterClothes = async (e: any) => {
    try {
      setLoading(true);
      const category = e.target.childNodes.item(0).nodeValue.toLowerCase();
      setCategoryName(category);

      const filteredClothes = await axios.post(
        "http://localhost:3000/api/clothes/filter",
        { category }
      );
      setClothes(filteredClothes.data.filteredClothes);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-normal my-10 md:my-10">
          Or Subscribe To The Newsletter
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mx-auto container relative xl:px-32 px-2">
          <ul className="flex items-center m-auto text-xl md:text-lg md:m-px">
            <li
              className={`ml-4 hover:cursor-pointer ${
                categoryName === "all products"
                  ? "font-bold hover:text-current"
                  : "hover:text-gray-400"
              }`}
              onClick={filterClothes}
            >
              All Products
            </li>
            <li
              className={`ml-4 hover:cursor-pointer ${
                categoryName === "t-shirt"
                  ? "font-bold hover:text-current"
                  : "hover:text-gray-400"
              }`}
              onClick={filterClothes}
            >
              T-Shirt
            </li>
            <li
              className={`ml-4 hover:cursor-pointer ${
                categoryName === "hoodie"
                  ? "font-bold hover:text-current"
                  : "hover:text-gray-400"
              }`}
              onClick={filterClothes}
            >
              Hoodie
            </li>
            <li
              className={`ml-4 hover:cursor-pointer ${
                categoryName === "jacket"
                  ? "font-bold hover:text-current"
                  : "hover:text-gray-400"
              }`}
              onClick={filterClothes}
            >
              Jacket
            </li>
          </ul>

          <button className="flex bg-black px-6 py-2 text-gray-300 text-md lg:m-px items-center rounded-md m-auto md:m-px mt-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2 mt-0.2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </span>
            Filter
          </button>
        </div>
      </div>

      {loading && <h1 className="text-center">Loading...</h1>}
      {clothes.length < 1 && (
        <h1 className="text-center font-semmibold text-2xl mt-6">
          Category Not Found!
        </h1>
      )}

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center xl:mx-28 mt-8">
        {clothes?.map((clothe: Clothe) => {
          return (
            <div key={clothe.id} className="flex justify-center m-4">
              <ClothesCard clothe={clothe} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
