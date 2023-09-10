import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-[79vh] p-5">
        <div className="lg:w-[50%]">
          <p className="font-bold lg:text-[5rem] text-[2rem]">
            It's easy to add your place on SmartPark
          </p>
        </div>
        <div>
          <div className="flex text-2xl items-center my-8 justify-between">
            <div>
              <p className="font-bold">1. Tell us about your place</p>
              <p className="font-light">
                Share basic info, like location of your place
              </p>
            </div>
            <i
              className="fa-solid fa-location-dot text-red-500"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <hr />
          <div className="flex text-2xl items-center my-8 justify-between">
            <div>
              <p className="font-bold">2. Make your place stand out</p>
              <p className="font-light">Add some photos of your place</p>
            </div>
            <i
              className="fa-solid fa-image text-green-500"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <hr />
          <div className="flex text-2xl items-center my-8 justify-between">
            <div>
              <p className="font-bold">3. Publish online</p>
              <p className="font-light">
                Set a price and publish your place online
              </p>
            </div>
            <i
              className="fa-solid fa-money-check-dollar text-sky-500"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="flex justify-end mx-5 text-white font-bold border-t-4 pt-2">
        <Link href="/addspot/about-place">
          <button className="bg-green-500 p-3 rounded-lg ">Get started</button>
        </Link>
      </div>
    </>
  );
}
