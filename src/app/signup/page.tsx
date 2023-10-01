"use client";
import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useWallet } from "../context/WalletContext";
import { getContractInstance } from "../lib/web3";
import { storeFiles } from "../lib/web3Storage";

export default function Page() {
  const { currentAccount } = useWallet();
  const [isloading, setIsloading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const gender = formData.get("gender") as string;
    const age = parseInt(formData.get("age") as string);
    // const drivingLicenseImage = formData.get("licenseimg");
    // let drivingLicense;
    // if (drivingLicenseImage?.name !== "")
    //   drivingLicense = await storeFiles([drivingLicenseImage]);
    const drivingLicense = formData.get("drivingLicense");
    const contract = await getContractInstance();
    // await contract.methods
    //   .createOwner(name, gender, age, email, drivingLicense)
    //   .send({ from: currentAccount });
    try {
      const a = await contract.methods.getProfile(currentAccount).call();
      console.log(a);
    } catch (error) {
      console.log({ error });
    }
  };
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-center min-h-[90vh]">
        <img
          src="../vision.png"
          alt="img-vect"
          className="lg:w-[35rem] lg:h-[30rem]"
        />
        <div
          className="px-5 flex items-center justify-center"
          style={{ width: "30rem" }}
        >
          {/* <form onSubmit={handleSubmit}> */}
          <form className="w-full h-100" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="gender">
                Gender
              </label>
              <select
                name="gender"
                className="w-full px-2 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Driving License</label>
              <input
                type="number"
                name="license"
                placeholder="Enter your Driving License number"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            {isloading ? (
              <>
                <button
                  disabled
                  className="cursor-progress w-full block bg-gray-500  text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
                >
                  Creating Account
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400  text-white font-semibold rounded-lg
                  px-4 py-3 mt-6"
                >
                  Create Account
                </button>
              </>
            )}
          </form>
        {/* </form> */}
        </div>
      </div>
      {/* <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <form onSubmit={handleSubmit}>
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px- pb-4 pt-5 sm:pe-3 sm:pb-4">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Create account
                        </Dialog.Title>
                        <div className="mt-2 border-2 border-gray-300 rounded-lg p-3">
                          <div>
                            <input
                              className="px-2 outline-none h-10"
                              type="text"
                              placeholder="Full Name"
                              name="name"
                              required
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="email"
                              placeholder="Email"
                              name="email"
                              required
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="text"
                              placeholder="Gender"
                              name="gender"
                              required
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="number"
                              placeholder="Age"
                              name="age"
                              required
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="text"
                              placeholder="Driving License"
                              name="drivingLicense"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:ml-3 sm:w-auto"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </>
  );
}
