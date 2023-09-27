"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  var navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Add your Place", href: "/addspot", current: false },
    { name: "About us", href: "/about", current: false },
    { name: "Team", href: "/team", current: false },
  ];

  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {/* <img
                    className="h-8 w-auto"
                    src=""
                    alt="SmartPark"
                  /> */}
                    <p className="text-dark font-bold text-2xl">SmartPark</p>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href == pathname
                            ? "bg-gray-900 text-white"
                            : "hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* Connect metamask wallet */}
                    <Link href="/signup">
                      <button
                        className=" hover:bg-gray-700 hover:text-white
                          rounded-md px-3 py-2 text-sm font-medium"
                      >
                        Connect Wallet
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.href == pathname
                      ? "bg-gray-900 text-white"
                      : " hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  // aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {/* <Disclosure.Button> */}
                {/* Connect metamask wallet */}
                <button
                  className="hover:bg-gray-700 hover:text-white
                          rounded-md px-3 py-2 text-sm font-medium"
                >
                  Connect Wallet
                </button>
              {/* </Disclosure.Button> */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
