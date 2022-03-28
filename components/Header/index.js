import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import whiteOpenSea from "../../public/images/whiteOpenSea.png";
// import spades from '/images/spades.png';

// const myLoader = ({ src, width, quality }) => {
//   return `https://tailwindui.com/img/logos/${src}`;
// };

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav
        className={`z-10 bg-transparent inset-x-0 top-0 h-16 ${
          isOpen ? "fixed bg-[#ffffffd5]" : "absolute"
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="items-end">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image
                      // loader={myLoader}
                      className="h-8 w-8"
                      src={"/images/spades.png"}
                      alt="Ace of Spades"
                      height={50}
                      width={50}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden header:block">
                <div className="ml-10 flex items-baseline space-x-3">
                  <Link href="/">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </Link>
                  <Link href="/Mint">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Art Map
                    </a>
                  </Link>

                  <Link href="/Gallery">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Team
                    </a>
                  </Link>
                  <Link href="/Gallery">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Gallery
                    </a>
                  </Link>
                  <Link href="/Gallery">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Shop
                    </a>
                  </Link>
                  <Link href="/Gallery">
                    <a className="hover:bg-[#cec8c8] text-[#292928] ease-in duration-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Minting Page
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="px-3 py-2 hover:bg-[#cec8c8] rounded-md hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faInstagram} />
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:bg-[#cec8c8] rounded-md  hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faTwitter} />
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:bg-[#cec8c8] rounded-md  hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <FontAwesomeIcon className="h-8 w-8" icon={faDiscord} />
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 hover:bg-[#cec8c8] rounded-md  hover:text-white ease-in duration-300  relative top-[9px]"
                  >
                    <Image
                      src={whiteOpenSea}
                      alt="OpenSea"
                      height={32}
                      width={32}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex header:hidden">
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
          onClick={() => setIsOpen(false)}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {isOpen && (
            <div
              className="bg-[#ffffffd5] header:hidden h-screen fixed w-screen"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href={"/"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] block px-5 py-3 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>
                <Link href={"/ArtMap"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium">
                    Art Map
                  </a>
                </Link>
                <Link href={"/Gallery"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium">
                    Team
                  </a>
                </Link>
                <Link href={"/Gallery"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium">
                    Gallery
                  </a>
                </Link>
                <Link href={"/Gallery"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium">
                    Shop
                  </a>
                </Link>
                <Link href={"/Gallery"}>
                  <a className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium">
                    Minting Page
                  </a>
                </Link>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faTwitter} />
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium"
                >
                  <FontAwesomeIcon className="h-8 w-8" icon={faDiscord} />
                </a>
                <a
                  href="#"
                  className="hover:bg-[#cec8c8] text-[#4D4C4B] hover:text-white block  px-5 py-3 rounded-md text-base font-medium"
                >
                  <Image
                    src={whiteOpenSea}
                    alt="OpenSea"
                    height={32}
                    width={32}
                  />
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
