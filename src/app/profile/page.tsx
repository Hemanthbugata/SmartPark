import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="shadow-lg hover:shadow-xl p-5 rounded-xl w-[30rem] h-[20rem] flex flex-col items-center justify-center gap-5">
          <p className="font-bold text-3xl border-b">Your Profile</p>
          <div className="text-xl">
            <p><span className="font-semibold text-2xl">Name: </span>Suraj lorem ipsum</p>
            <p><span className="font-semibold text-2xl">Age: </span>19</p>
            <p><span className="font-semibold text-2xl">Gender: </span>Male</p>
            <p><span className="font-semibold text-2xl">Email: </span>suraj@suraj.com</p>
            <p><span className="font-semibold text-2xl">Driving License: </span>12453</p>
          </div>
        </div>
      </div>
    </div>
  );
}
