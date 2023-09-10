import Link from "next/link";
import React from "react";
export default function page() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-[79vh] p-5">
        <div className="lg:w-[50%]">
          <p className="text-xl">step 1</p>
          <p className="font-bold lg:text-[5rem] text-[2rem]">
            Tell us about your place
          </p>
        </div>
        <div className="border-2 rounded-lg border-gray-400 shadow-lg p-5 lg:w-[40%] w-[80%]">
            <div>
                <input className="px-2 outline-none h-10" type="text" placeholder="House,flat,building no"/>
            </div>
            <div className="border-t-2 border-gray-400 mt-2">
                <input className="px-2 outline-none h-10" type="text" placeholder="street address"/>
            </div>
            <div className="border-t-2 border-gray-400 mt-2">
                <input className="px-2 outline-none h-10" type="text" placeholder="city/town"/>
            </div>
            <div className="border-t-2 border-gray-400 mt-2">
                <input className="px-2 outline-none h-10" type="text" placeholder="pincode"/>
            </div>
            <div className="border-t-2 border-gray-400 mt-2">
                <input className="px-2 outline-none h-10" type="text" placeholder="province/state"/>
            </div>
        </div>
      </div>
      <div className="flex justify-between mx-5 items-center  font-bold border-t-4 pt-2">
        <Link href="/addspot">
          <button className="underline">back</button>
        </Link>
        <Link href="/addspot/add-images">
          <button className="bg-green-500 p-3 rounded-lg text-white">
            Next
          </button>
        </Link>
      </div>
    </>
  );
}
