import Image from "next/image";
import gallery from "../../public/gallery.json";
import { useState } from "react";

const Gallery = () => {
  const [nfts, setNfts] = useState(gallery.goldenAzukis.slice(0, 10));
  const [eyesFilter, setEyesFilter] = useState(false);
  const [mouthFilter, setMouthFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState(false);
  // let grabNfts = gallery.goldenAzukis.slice(0, 10);

  const filterEyes = (e) => {
    if (!eyesFilter) {
      const grabNfts = nfts.filter((nft) => nft.attributes.Eyes === "Pensive");
      setNfts(grabNfts);
      setEyesFilter(true);
    } else {
      setNfts(gallery.goldenAzukis.slice(0, 10));
      setEyesFilter(false);
    }
  };

  const filterMouth = () => {
    if (!mouthFilter) {
      const grabNfts = nfts.filter((nft) => nft.attributes.Mouth === "Closed");
      console.log(grabNfts);
      setNfts(grabNfts);
      setMouthFilter(true);
    } else {
      setNfts(gallery.goldenAzukis.slice(0, 10));
      setMouthFilter(false);
    }
  };

  const filterType = () => {
    if (!typeFilter) {
      const grabNfts = nfts.filter((nft) => nft.attributes.Type === "Human");
      setNfts(grabNfts);
      setTypeFilter(true);
    } else {
      setNfts(gallery.goldenAzukis.slice(0, 10));
      setTypeFilter(false);
    }
  };

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
            <div onClick={filterEyes} className="py-2">
              <input
                checked={eyesFilter}
                className="p-4"
                type="checkbox"
                name="Eyes"
              />
              <label className="p-4" htmlFor="Eyes">
                Pensive Eyes
              </label>
            </div>
            <div onClick={filterMouth} className="py-2">
              <input
                checked={mouthFilter}
                className="p-4"
                type="checkbox"
                name="Mouth"
              />
              <label className="p-4" htmlFor="Mouth">
                Closed Mouth
              </label>
            </div>
            <div onClick={filterType} className="py-2">
              <input
                checked={typeFilter}
                className="p-4"
                type="checkbox"
                name="Type"
              />
              <label className="p-4" htmlFor="Type">
                Human
              </label>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:mb-12 w-[400px]">
          <h1 className="text-4xl pb-4 font-bold">Spades</h1>
          <div className="flex flex-wrap justify-around transition duration-500 ease-in-out ">
            {nfts.map((nft, index) => {
              return (
                <div
                  key={`index-${index}`}
                  className="max-w-[150px] m-5 hover:scale-110 transition duration-300 ease-out hover:ease-in-out  shadow-slate-900 shadow-2xl rounded-lg border border-gray-200 bg-gray-800 border-gray-700"
                >
                  <Image
                    className="rounded-md"
                    src={nft.image}
                    alt="hard at work minting that nft"
                    height={300}
                    width={300}
                  />
                  <div className="p-2">
                    <p className="mb-3 opacity-70 font-lighter text-gray-700 text-gray-400">
                      {nft.name}
                    </p>
                    <p className="mb-3 font-bold opacity-80 text-gray-700 text-gray-400">
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
