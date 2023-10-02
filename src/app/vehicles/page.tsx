import React from "react";

export default function Page() {
  const vehicles = [
    {
      id: "1",
      name: "surajsfsf",
      licensePlate: "TS 05ED 12345",
      vehicleType: "Two wheeler",
      docs: "",
      owner: "",
      verified: true,
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <p className="font-bold text-3xl">Your Vehicles</p>
          {vehicles.map((vehicle, index) => {
            return (
              <div
                key={index}
                className="shadow-lg hover:shadow-xl p-8 rounded-xl  flex flex-col items-center justify-center gap-5"
              >
                <div className="text-2xl flex flex-col gap-2">
                  <p className="flex gap-2 items-center">
                    <img src="../id-card.png" alt="id-card" className="w-[2rem]" /><span className="font-semibold text-2xl">Name: </span>{vehicle.name}
                  </p>
                  <p className="flex gap-2 items-center">
                    <img src="../license-plate.png" alt="license-plate" className="w-[2rem]" /><span className="font-semibold text-2xl">Lisence Plate: </span>{vehicle.licensePlate}
                  </p>
                  <p className="flex gap-2 items-center">
                    <img src="../vehicletype.png" alt="vehicle-type" className="w-[2rem]" /><span className="font-semibold text-2xl">Type: </span>{vehicle.vehicleType}
                  </p>
                  <p className="flex gap-2 items-center">
                    <img src="../verified.png" alt="id-card" className="w-[2rem]" /><span className="font-semibold text-2xl">verified: </span>
                    {vehicle.verified?"Yes":"No"}
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
