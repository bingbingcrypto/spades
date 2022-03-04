import Image from "next/image";
import React, { useEffect, useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ethers } from "ethers";
// import { ethers } from "ethers";
// import wagieNFT from "../../utils/wagieNFT.json";
// import NftCard from "../../components/NftCard";
// import fetchNftData from "../../actions/fetchNftData";
// import { tokenContractAddress } from "../../utils/constants";
// import "./mint.css";

const ropsten = "0x3";

const Mint = () => {
  const [nftNum, setNftNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  // not current;y working need to fix this
  // const checkNetwork = async () => {
  //   try {
  //     if (window.ethereum.networkVersion !== ropsten) {
  //       await window.ethereum.request({
  //         method: "wallet_switchEthereumChain",
  //         params: [{ chainId: ropsten }],
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const connectWalletAction = async (e) => {
    e.preventDefault();
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      if (ethereum.networkVersion !== ropsten) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: ropsten }],
        });
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("accounts", accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   checkNetwork();
    // checkIfWalletIsConnected();
  // }, [currentAccount]);
  // const [nft, setNft] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const getNftNum = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   try {
  //     const nftContract = new ethers.Contract(
  //       tokenContractAddress,
  //       wagieNFT,
  //       signer
  //     );
  //     const nftNum = await nftContract.totalSupply();
  //     setNftNum(nftNum.toNumber());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const askContractToMintNft = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const { ethereum } = window;
  //     if (ethereum) {
  //       const provider = new ethers.providers.Web3Provider(ethereum);
  //       const signer = provider.getSigner(currentAccount);
  //       const tokenContract = new ethers.Contract(
  //         tokenContractAddress,
  //         wagieNFT,
  //         signer
  //       );
  //       console.log("Going to pop wallet now to pay gas...");
  //       const totalCost = ethers.utils.parseEther(`${wagiePrice * mintNumber}`);
  //       const value = { value: totalCost };
  //       let nftTxn = await tokenContract.mint(mintNumber, value);
  //       console.log("Mining...please wait.");
  //       setLoading(true);
  //       await nftTxn.wait();
  //       if (nftTxn) {
  //         alert("Nice you just scored a Wagie. Welcome to the club.");
  //         setLoading(false);
  //       } else {
  //         alert("Insuficient funds to mint a Wagie.");
  //         setLoading(false);
  //       }
  //     } else {
  //       console.log("Ethereum object doesn't exist!");
  //     }
  //   } catch (error) {
  //     alert(
  //       "your transaction failed. Your wallet might not be connected try that first."
  //     );
  //     console.log(error);
  //   }
  // };

  const incrementNftNum = () => {
    if (nftNum < 5) {
      setNftNum(nftNum + 1);
    }
  };

  const decrementNftNum = () => {
    if (nftNum > 1) {
      setNftNum(nftNum - 1);
    }
  };

  const maxNft = (e) => {
    e.preventDefault();
    setNftNum(5);
  };

  const isLoading = () => {
    if (loading) {
      return (
        <Image
          className="loading"
          src="https://media.giphy.com/media/o28elTLxOjiRW/giphy.gif"
          alt="hard at work minting that nft"
        />
      );
    } else {
      return (
        <div className="bg-[#1F1F1F] shadow-slate-900 sm:my-9 md:mt-0 md:mb-11 sm:mx-auto shadow-2xl rounded-lg w-[300px] py-[32px]">
          <div className="">
            <div className="">
              <h1 className="text-white font-bold text-lg pb-2">
                Presale Mint
              </h1>
              <p className="text-white font-extralight opacity-60 text-xs pb-5">
                203 NFTs minted
              </p>
            </div>
            <form action="">
              <div className="flex border-t-2 border-slate-400 mx-6 border-b-2 py-2 items-center justify-between mb-10">
                <label
                  htmlFor="twitter"
                  className="inline-block  mr-6 text-right
                                    font-bold text-white"
                >
                  Amount
                </label>
                <FontAwesomeIcon
                  onClick={decrementNftNum}
                  icon={faMinus}
                  className="text-white cursor-pointer"
                />
                <h3 className="text-white font-bold text-right">{nftNum}</h3>
                <FontAwesomeIcon
                  onClick={incrementNftNum}
                  icon={faPlus}
                  className="text-white cursor-pointer"
                />
                <button onClick={maxNft} className="bg-white p-1 rounded-lg">
                  Max
                </button>
              </div>

              <div className="flex border-t-2 border-slate-400 mx-6 border-b-2 py-2 items-center justify-between mb-10">
                <label
                  htmlFor="twitter"
                  className="inline-block  mr-6 text-right
                                    font-bold text-white"
                >
                  Total
                </label>
                <h3 className="text-white font-bold text-right">
                  {new Intl.NumberFormat("en", {
                    maximumSignificantDigits: 3,
                  }).format(nftNum * 1.05)}{" "}
                  Eth
                </h3>
              </div>

              <div className="text-center">
                {currentAccount ? (
                  <button
                    onClick={(e) => askContractToMintNft(e)}
                    className="py-3 px-8 w-100 bg-[#F0FEA9] text-black rounded-md font-bold"
                  >
                    Mint
                  </button>
                ) : (
                  <button
                    onClick={(e) => connectWalletAction(e)}
                    className="py-3 px-8 w-100 bg-[#F0FEA9] text-black rounded-md font-bold"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  // useEffect(() => {
  // async function updateNft() {
  //   const getNft = await fetchNftData(1);
  //   setNft(getNft);
  // }
  // getNftNum();
  // updateNft();
  // }, []);
  //
  return (
    <div className="sm:mt-[80px] md:m-[90px] text-center">
      <div>
        <h1 className="pb-8 text-4xl drop-shadow-2xl">Spades Presale</h1>
        {/* <p>Generative music and art NFT project</p> */}
      </div>
      <div className="flex sm:flex-col-reverse md:flex-row relative justify-around ">
        {isLoading()}
        <div className="sm:mx-auto sm:mb-12">
          <div className="max-w-[300px] bg-white shadow-slate-900 shadow-2xl rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
