import Image from "next/image";
import gallery from "../../public/gallery.json";
import { useState } from "react";
import ModalComponent from "../../components/ModalComponent";
import { Switch } from "@headlessui/react";

const tracks = [
  {
    title: "One Night in Neo Kobe",
    artist: "Some Dude",
    audioSrc: "/music/One Night In Neo Kobe City.mp3",
    image: "string",
    color: "string",
  },
  {
    title: "Beware",
    artist: "Death Grips",
    audioSrc: "/music/Beware.mp3",
    image: "string",
    color: "string",
  },
  {
    title: "Culture Shock",
    artist: "Death Grips",
    audioSrc: "/music/CultureShock.mp3",
    image: "string",
    color: "string",
  },
];

const Gallery = () => {
  const [nfts, setNfts] = useState(gallery.goldenAzukis.slice(0, 10));
  // const [enabled, setEnabled] = useState(true);
  const [eyesFilter, setEyesFilter] = useState(false);
  const [mouthFilter, setMouthFilter] = useState(false);
  const [typeFilter, setTypeFilter] = useState(false);
  const [audio, setAudio] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeNft, setActiveNft] = useState(null);
  // let grabNfts = gallery.goldenAzukis.slice(0, 10);

  const filterEyes = (e) => {
    if (!eyesFilter) {
      const grabNfts = nfts.filter((nft) => nft.attributes.Eyes === "Pensive");
      setNfts(grabNfts);
    } else {
      setNfts(gallery.goldenAzukis.slice(0, 10));
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

  const playMusic = () => {
    // const randomTrack = Math.floor(Math.random() * tracks.length);
    // const audio = new Audio(
    //   tracks[Math.floor(Math.random() * tracks.length)].audioSrc
    // );
    // setAudio(audio);
    // audio.play();
    console.log("hai");
  };

  const stopMusic = () => {
    // audio.pause();
    console.log("bye");
  };

  function closeModal() {
    setIsOpen(false)
  }

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
              <Switch.Group>
                <div className="flex justify-between items-center">
                  <Switch.Label className="mr-4">Pensive Eyes</Switch.Label>
                  <Switch
                    checked={eyesFilter}
                    onChange={setEyesFilter}
                    className={`${
                      eyesFilter ? "bg-blue-600" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <span
                      className={`${
                        eyesFilter ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            <div onClick={filterMouth} className="py-2">
              <Switch.Group>
                <div className="flex justify-between items-center">
                  <Switch.Label className="mr-4">Closed Mouth</Switch.Label>
                  <Switch
                    checked={mouthFilter}
                    onChange={setMouthFilter}
                    className={`${
                      mouthFilter ? "bg-blue-600" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <span
                      className={`${
                        mouthFilter ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
            </div>
            <div onClick={filterType} className="py-2">
              <Switch.Group>
                <div className="flex justify-between items-center">
                  <Switch.Label className="mr-4">Human</Switch.Label>
                  <Switch
                    checked={typeFilter}
                    onChange={setTypeFilter}
                    className={`${
                      typeFilter ? "bg-blue-600" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                  >
                    <span
                      className={`${
                        typeFilter ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
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
                  // onMouseEnter={playMusic}
                  // onMouseLeave={stopMusic}
                  onClick={() => {
                    setActiveNft(nft);
                    setIsOpen(true);
                  }}
                  className="max-w-[150px] m-5 hover:scale-110 transition duration-300 ease-out hover:ease-in-out cursor-pointer shadow-slate-900 shadow-2xl rounded-lg border border-gray-200 bg-gray-800 border-gray-700"
                >
                  <Image
                    className="rounded-md"
                    src={nft.image}
                    alt="Azuki nft"
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
      {isOpen && (
        <ModalComponent isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} nft={activeNft} />
      )}
    </div>
  );
};

export default Gallery;
