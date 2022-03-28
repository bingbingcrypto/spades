// import { useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const ModalComponent = ({ isOpen, closeModal, nft }) => {
  console.log(`ModalComponent: ${JSON.stringify(nft.attributes)}`);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-[75%] my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 shadow-xl rounded-2xl">
              <div className="flex items-center justify-between">
                <Image
                  src={nft.image}
                  alt={nft.name}
                  width={400}
                  height={400}
                  // layout="responsive"
                  className=""
                />
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white px-4"
                >
                  {nft.name}
                </Dialog.Title>
                <div className="inline-grid grid-cols-2 px-4">
                  {Object.entries(nft.attributes).map((attribute) => (
                    <div
                      key={`${nft.name}`}
                      className="m-2 p-2 rounded-2xl bg-gray-600"
                    >
                      <p className="text-white">
                        {attribute[0]}: {attribute[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </button>
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalComponent;
