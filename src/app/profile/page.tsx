import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="shadow-lg hover:shadow-xl p-10 px-20 rounded-xl flex flex-col items-center justify-center gap-5">
          <p className="font-bold text-3xl border-b">Your Profile</p>
          <div className="flex flex-col gap-2 text-2xl">
            <p className="flex gap-2 items-center">
              <img src="../id-card.png" alt="id" className="w-[2rem]" />
              <span className="font-semibold text-2xl">Name: </span>Suraj
            </p>
            <p className="flex gap-2 items-center">
              <img src="../age.png" alt="age" className="w-[2rem]" />
              <span className="font-semibold text-2xl">Age: </span>19
            </p>
            <p className="flex gap-2 items-center">
              <img src="../gender.png" alt="gender" className="w-[2rem]" />
              <span className="font-semibold text-2xl">Gender: </span>Male
            </p>
            <p className="flex gap-2 items-center">
              <img src="../email.png" alt="email" className="w-[2rem]" />
              <span className="font-semibold text-2xl">Email: </span>
              suraj@suraj.com
            </p>
            <p className="flex gap-2 items-center">
              <img
                src="../driving-license.png"
                alt="driving"
                className="w-[2rem]"
              />
              <span className="font-semibold text-2xl">Driving License: </span>
              12453
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
