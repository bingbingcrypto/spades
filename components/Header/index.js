import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const myLoader = ({ src, width, quality }) => {
  return `https://tailwindui.com/img/logos/${src}`;
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="z-10 bg-transparent absolute inset-x-0 top-0 h-16 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="items-end">
              <div className="flex-shrink-0">
                <Image
                  loader={myLoader}
                  className="h-8 w-8"
                  src={"workflow-mark-indigo-500.svg"}
                  alt="Workflow"
                  height={30}
                  width={30}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Mint
                  </a>

                  <a
                    href="#"
                    className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faTelegram} />
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faTwitter} />
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faDiscord} />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="bg-[#ffffff9e] md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] block px-5 py-5 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-5 rounded-md text-base font-medium"
                >
                  Mint
                </a>

                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-5 rounded-md text-base font-medium"
                >
                  Gallery
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-5 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faTelegram} />
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-5 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-5 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faDiscord} />
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
