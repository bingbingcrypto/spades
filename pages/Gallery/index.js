import Image from "next/image";
import gallery from "../../public/gallery.json";
import { useState } from "react";

const Gallery = () => {
  // const [nfts , setNfts] = useState([]);
  const grabNfts = gallery.goldenAzukis.slice(0, 10);
  return (
    <div className="sm:mt-[80px] md:m-[90px] text-center">
      <div>
        <h1 className="pb-8 text-4xl drop-shadow-2xl font-bold">
          Spades Presale
        </h1>
        {/* <p>Generative music and art NFT project</p> */}
      </div>
      <div className="flex sm:flex-col md:flex-row relative justify-around ">
        <div className="sm:mx-auto sm:mb-12">
          <h1 className="text-4xl pb-8 font-bold">Filters</h1>
          <div className="flex-col">
            <div className="py-2">
              <input className="p-4" type="checkbox" name="scales" />
              <label className="p-4" htmlFor="scales">
                Scales
              </label>
            </div>
            <div className="py-2">
              <input className="p-4" type="checkbox" name="scales" />
              <label className="p-4" htmlFor="scales">
                Scales
              </label>
            </div>
            <div className="py-2">
              <input className="p-4" type="checkbox" name="scales" />
              <label className="p-4" htmlFor="scales">
                Scales
              </label>
            </div>
            <div className="py-2">
              <input className="p-4" type="checkbox" name="scales" />
              <label className="p-4" htmlFor="scales">
                Scales
              </label>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:mb-12">
          {/* <div className="max-w-[300px] bg-white shadow-slate-900 shadow-2xl rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="rounded-md"
                src={"/images/pyrimadhead.jpg"}
                alt="hard at work minting that nft"
                height={300}
                width={300}
              />
              <div className="p-5">
                <p className="mb-3 opacity-70 font-lighter text-gray-700 dark:text-gray-400">
                  Spade
                </p>
                <p className="mb-3 font-bold opacity-80 text-gray-700 dark:text-gray-400">
                  NO. 2412
                </p>
              </div>
            </div> */}
          <h1 className="text-4xl pb-4 font-bold">Spades</h1>
          <div className="flex flex-wrap justify-around">
            {grabNfts.map((nft, index) => {
              return (
                <div
                  key={`index-${index}`}
                  className="max-w-[150px] m-5 hover:scale-110 transition duration-300 ease-out hover:ease-in-out bg-white shadow-slate-900 shadow-2xl rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                >
                  <Image
                    className="rounded-md"
                    src={nft.image}
                    alt="hard at work minting that nft"
                    height={300}
                    width={300}
                  />
                  <div className="p-2">
                    <p className="mb-3 opacity-70 font-lighter text-gray-700 dark:text-gray-400">
                      {nft.name}
                    </p>
                    <p className="mb-3 font-bold opacity-80 text-gray-700 dark:text-gray-400">
                      {nft.id}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
