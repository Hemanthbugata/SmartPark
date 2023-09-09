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
                  <p className="font-semibold text-md">₹ {place.priceperday} per day</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
