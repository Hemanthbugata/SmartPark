"use client";
import Link from "next/link";
import React from "react";
export default function Page() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center flex-col lg:min-h-[79vh] min-h-[70vh] p-5">
        <div className="lg:w-[60%]">
          <p className="text-xl">step 3</p>
          <p className="font-bold lg:text-[5rem] text-[2rem]">
            set price and publish
          </p>
        </div>

        <div className="flex text-[4rem] max-w-40 text-center">
          <span>$</span>
          <input
            className="outline-none w-60"
            type="number"
            placeholder="price"
            defaultValue="0"
            onWheel={(event) => event.currentTarget.blur()}
          />
        </div>
      </div>
      <div className="flex justify-between mx-5 items-center  font-bold border-t-4 pt-2">
        <Link href="/addspot/add-images">
          <button className="underline">back</button>
        </Link>
        {/* <Link href="/addspot/add-images"> */}

            {/* add an onclick event to publish the place */}
          <button className="bg-green-500 p-3 rounded-lg text-white">
            Publish
          </button>
        {/* </Link> */}
      </div>
    </>
  );
}
