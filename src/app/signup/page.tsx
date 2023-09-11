"use client";
import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function Page() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  return (
    <>
      {/* <div className="flex justify-center pt-5">
        <div className="border-2 rounded-lg border-gray-400 shadow-lg p-5 lg:w-[40%] w-[80%]">
          <div>
            <input
              className="px-2 outline-none h-10"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="border-t-2 border-gray-400 mt-2">
            <input
              className="px-2 outline-none h-10"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="border-t-2 border-gray-400 mt-2">
            <input
              className="px-2 outline-none h-10"
              type="number"
              placeholder="Age"
            />
          </div>
          <div className="border-t-2 border-gray-400 mt-2 pt-2 flex justify-between">
            <label className="text-gray-400">Driver&apos;s Lisence</label>
            <div className="flex items-center bg-red-500 text-white p-2 rounded-lg gap-1">
              <label htmlFor="lisenceimg" className="cursor-pointer bg-red-500">
                Upload
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1rem"
                viewBox="0 0 512 512"
                fill="white"
              >
                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
              </svg>
            </div>
            <input id="lisenceimg" className="hidden" type="file" />
          </div>
        </div>
      </div> */}

      <Transition.Root show={open} as={Fragment}>
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px- pb-4 pt-5 sm:pe-3 sm:pb-4">
                    <div className="">
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
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2">
                            <input
                              className="px-2 outline-none h-10"
                              type="number"
                              placeholder="Age"
                            />
                          </div>
                          <div className="border-t-2 border-gray-400 mt-2 pt-2 px-2 flex justify-between">
                            <label className="text-gray-400">
                              Driver&apos;s Lisence
                            </label>
                            <div className="flex items-center bg-gray-500 text-white p-2 rounded-lg gap-1">
                              <label
                                htmlFor="lisenceimg"
                                className="cursor-pointer"
                              >
                                Upload
                              </label>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1rem"
                                viewBox="0 0 512 512"
                                fill="white"
                              >
                                <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                              </svg>
                            </div>
                            <input
                              id="lisenceimg"
                              className="hidden"
                              type="file"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
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
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
