"use client";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState([
    //should get data from api/blockchain
    {
      image: "../parking1.jpg",
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      image: "../parking2.jpg",
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      image: "../parking3.jpg",
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      image: "../parking4.jpeg",
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
  ]);
  return (
    <>
      {/* <div className="pt-1 overflow-hidden lg:overflow-auto relative">
        <img
          className="w-full home-img"
          src="../map.png"
          alt="map"
          style={{ filter:"blur(2px) brightness(0.7) contrast(0.8)" }}
        />
        <input
            className="bg-gray-100 rounded-full px-5 py-2 shadow-md outline-none"
            type="search"
            placeholder="search for a place"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
      </div> */}
      <div>
        <div className=" my-5 flex items-center justify-center gap-2">
          {/* <i
            className="fa-solid fa-location-dot text-red-500"
            style={{ fontSize: "2rem" }}
          ></i> */}
          <input
            className="bg-gray-100 rounded-full px-5 py-2 shadow-md outline-none justify-self-center"
            type="search"
            placeholder="search for a place"
          />
          <button className="bg-red-500 rounded-lg px-3 py-2 hover:bg-red-600">
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </button>
        </div>
        <div className="mt-5 flex flex-wrap wrap justify-evenly gap-5">
          {data.map((place, id) => {
            return (
              <div key={id} className="rounded-2xl hover:shadow-2xl">
                <img
                  src={place.image}
                  alt={`img${id}`}
                  className="rounded-2xl object-cover"
                  style={{ width: "17rem", height: "20rem" }}
                />
                <div className="p-2">
                  <div className="flex justify-between text-xl font-bold">
                    <p>
                      {place.location}, {place.pincode}
                    </p>
                    <p>⭐{place.rating}</p>
                  </div>
                  <p className="font-semibold text-md">
                    ₹ {place.priceperday} per day
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
