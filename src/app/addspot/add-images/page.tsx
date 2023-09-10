import Link from "next/link";
import React from "react";
export default function page() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center lg:min-h-[79vh] min-h-[70vh] p-5">
        <div className="lg:w-[50%]">
          <p className="text-xl">step 2</p>
          <p className="font-bold lg:text-[5rem] text-[2rem]">
            Add some photos
          </p>
        </div>
        <div className="flex flex-col border-2 rounded-lg border-gray-400 shadow-lg p-5 h-48 items-center justify-center lg:w-[40%] w-[80%] lg:mt-0 -mt-20">
        <i className="text-[2rem] fa-solid fa-image"></i>
            <p>you can upload any number of photos</p>
            <label className="underline" htmlFor="img-upload">upload images</label>
            <input className="hidden" id="img-upload" type="file" multiple />
        </div>
      </div>
      <div className="flex justify-between mx-5 items-center  font-bold border-t-4 pt-2">
        <Link href="/addspot/about-place">
          <button className="underline">back</button>
        </Link>
        <Link href="/addspot/set-price">
          <button className="bg-green-500 p-3 rounded-lg text-white">
            Next
          </button>
        </Link>
      </div>
    </>
  );
}
