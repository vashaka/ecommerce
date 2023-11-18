/* eslint-disable @next/next/no-img-element */
import { Clothe } from "@prisma/client";
import Link from "next/link";
import React from "react";

const ClothesCard = ({ clothe }: any) => {
  return (
    <Link
      href={`/clothes/${clothe.id}`}
      className="hover:scale-110 duration-300"
    >
      <img
        src={clothe.image}
        alt="clothe image"
        className="w-[280px] h-[330px] object-cover"
      />
      <h1 className="text-start text-[13px] my-2 font-[500] mx-1">
        {clothe.title}
      </h1>
      <div className="flex justify-between text-[13px] mx-1">
        <p className="text-[hsl(0,0%,58%)]">{clothe.category}</p>
        <div className="flex">
          <p className={`${clothe.oldPrice !== 0 && "mr-3"}`}>
            ${clothe.price}
          </p>
          {clothe.oldPrice !== 0 && (
            <p className="text-red-400 line-through">${clothe.oldPrice}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ClothesCard;
