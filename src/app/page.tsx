/* eslint-disable @next/next/no-img-element */
import ClothesSection from "@/components/sections/ClothesSection";
import HeaderBanner from "@/components/sections/HeaderBanner";
import Zara from "../../public/zara.png";
import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <HeaderBanner />
      <ClothesSection />

      <div className="w-auto bg-black h-[500px] mt-10">
        <div className="flex md:grid md:grid-cols-2 grid-cols-1 md:container relative mx-auto w-full p-24 justify-center m-auto">
          <h1 className="text-white">hello</h1>

          <div>
            <div className="lg:ml-56 w-[200px] h-[200px]">
              <Image src={Zara} alt="zaralogo" className="" />

              <p
                className="text-white w-[300px] mt-6 text-md"
                style={{ lineHeight: "34px" }}
              >
                Lustrous yet understated. The new evening wear collection
                exclusively offered at the reopened Giorgio Armani boutique in
                Los Angeles.
              </p>
              <button className="bg-white px-6 lg:my-10 my-4 py-2 text-black text-md  lg:m-px rounded-md">
                See Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
