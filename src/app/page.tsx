"use client";
import { useEffect, useState } from "react";
import { getImageLinks } from "./lib/web3Storage";
import { getContractInstance } from "./lib/web3";
export default function Home() {
  const [pinCode, setPinCode] = useState(501510);

  const getUrl = (coordinates: string[]) =>
    `https://www.mapquestapi.com/geocoding/v1/reverse?key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7&location=${coordinates[0]}%2C${coordinates[1]}&outFormat=json&thumbMaps=false`;

  const getSpots = async () => {
    const contract = await getContractInstance();
    try {
      const spotsData = await contract.methods.getSpotsByPincode(pinCode);
      console.log(spotsData);
      let spots: {
        location: string;
        priceperday: number;
        pincode: number;
        images: string[];
        rating: number;
      }[] = [];
      for (let i = 0; i < spotsData.length; i++) {
        const spot = spotsData[i];
        const coordinates = spot["latLong"].split(",");
        const url = getUrl(coordinates);
        const response = await fetch(url);
        const result = await response.json();
        const spotData = {
          location: result["results"][0]["locations"][0]["adminArea5"],
          priceperday: spot["price"] * 24,
          pincode: spot["pinCode"],
          images: await getImageLinks(spot["docs"]),
          rating: (Math.floor(Math.random() * 40) + 10) / 10,
          vehicleType: spot["vehicleType"],
        };
        spots.push(spotData);
      }
      return spots;
    } catch (error) {
      console.log({ error });
    }
  };

  const [data, setData] = useState<
    {
      images: string[];
      location: string;
      pincode: number;
      priceperday: number;
      rating: number;
    }[]
  >([
    //should get data from api/blockchain
    {
      images: ["../parking1.jpg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking2.jpg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking3.jpg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
    {
      images: ["../parking4.jpeg"],
      location: "hyderabad",
      pincode: 501510,
      priceperday: 510,
      rating: 5,
    },
  ]);
  return (
    <>
      <div className="my-5 mb-10">
        <div className=" flex items-center justify-center gap-2">
          <input
            className="bg-gray-100 rounded-full px-5 py-2 shadow-md outline-none justify-self-center"
            type="search"
            placeholder="search for a place"
          />
          <button className="bg-red-500 rounded-lg px-3 py-2 hover:bg-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1rem"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </button>
        </div>
        <div className="mt-5 flex flex-wrap wrap justify-evenly gap-5 lg:gap-8 lg:px-20">
          {data.map((place, id) => {
            return (
              <div
                key={id}
                className="rounded-2xl hover:shadow-2xl px-2 lg:p-0"
              >
                <img
                  src={place.images[0]}
                  alt={`img${id}`}
                  className="rounded-2xl object-cover"
                  style={{ width: "25rem", height: "20rem" }}
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
