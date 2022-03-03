// import React, { useEffect, useState } from "react";
// import { ethers } from "ethers";
// import wagieNFT from "../../utils/wagieNFT.json";
// import NftCard from "../../components/NftCard";
// import fetchNftData from "../../actions/fetchNftData";
// import { tokenContractAddress } from "../../utils/constants";
// import "./mint.css";

// const wagiePrice = 500;

// const wagieJson = {
//   name: "Jeremias Bloom",
//   company: "McBurger Hospitality",
//   jobTitle: "Dishwasher",
//   profilePic:
//     "https://wagiedao.s3.ap-southeast-2.amazonaws.com/Jeremias_Bloom.png",
//   traits: { Hygiene: 9, "Work Ethic": 10, Loyalty: 8, "Industry Skills": 4 },
//   bonuses: { standardPay: 0, favour: 0 },
// };

// const Mint = ({ currentAccount }) => {
//   const [nftNum, setNftNum] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [mintNumber, setMintNumber] = useState(1);
//   const [nft, setNft] = useState({});

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const getNftNum = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     try {
//       const nftContract = new ethers.Contract(
//         tokenContractAddress,
//         wagieNFT,
//         signer
//       );
//       const nftNum = await nftContract.totalSupply();
//       setNftNum(nftNum.toNumber());
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const askContractToMintNft = async (event) => {
//     event.preventDefault();
//     try {
//       const { ethereum } = window;
//       if (ethereum) {
//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner(currentAccount);
//         const tokenContract = new ethers.Contract(
//           tokenContractAddress,
//           wagieNFT,
//           signer
//         );
//         console.log("Going to pop wallet now to pay gas...");
//         const totalCost = ethers.utils.parseEther(`${wagiePrice * mintNumber}`);
//         const value = { value: totalCost };
//         let nftTxn = await tokenContract.mint(mintNumber, value);
//         console.log("Mining...please wait.");
//         setLoading(true);
//         await nftTxn.wait();
//         if (nftTxn) {
//           alert("Nice you just scored a Wagie. Welcome to the club.");
//           setLoading(false);
//         } else {
//           alert("Insuficient funds to mint a Wagie.");
//           setLoading(false);
//         }
//       } else {
//         console.log("Ethereum object doesn't exist!");
//       }
//     } catch (error) {
//       alert(
//         "your transaction failed. Your wallet might not be connected try that first."
//       );
//       console.log(error);
//     }
//   };

//   const updateMintNumber = (event) => {
//     setMintNumber(event.target.value);
//   };

//   const isLoading = () => {
//     if (loading) {
//       return (
//         <img
//           className="loading"
//           src="https://media.giphy.com/media/o28elTLxOjiRW/giphy.gif"
//           alt="hard at work minting that nft"
//         />
//       );
//     } else {
//       return (
//         <form className="mint-form" onSubmit={askContractToMintNft}>
//           <label className="form-item">
//             How many NFT's would you like to mint
//           </label>
//           <select
//             className="form-item"
//             value={mintNumber}
//             onChange={updateMintNumber}
//           >
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//           <input
//             className="form-item mint-button"
//             type="submit"
//             value="Mint NFT"
//           />
//         </form>
//       );
//     }
//   };

//   useEffect(() => {
//     // async function updateNft() {
//     //   const getNft = await fetchNftData(1);
//     //   setNft(getNft);
//     // }
//     getNftNum();
//     // updateNft();
//   }, []);

//   return (
//     <div className="nft-maker">
//       <h1 className="nft-maker-p">{nftNum}/400 Wagies have been trained</h1>
//       <NftCard
//         key={wagieJson.name}
//         name={wagieJson.name}
//         image={wagieJson.profilePic}
//         company={wagieJson.company}
//         jobTitle={wagieJson.jobTitle}
//         skillset={wagieJson.traits}
//       />
//       <h1 className="nft-maker-p">Train a wagie</h1>
//       <h2 className="nft-maker-p">500 Rose per mint</h2>
//       {isLoading()}
//     </div>
//   );
// };

// export default Mint;
