import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AudioPlayer from "../components/AudioPlayer";
// import Nav from "../components/Header";

// const myLoader = ({ src, width, quality }) => {
//   return `https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80`;
// };

export default function Home() {
  return (
    <div className="sm:bg-transparent md:bg-[#ECE7E2]">
      <Head>
        <title>Azuki Prototype App</title>
        <meta name="prototype nft app" content="Made by Bingbing and Joel" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className=" bg-im">
        <div className="h-screen sm:bg-animephone md:bg-animefull bg-cover bg-center-bottom p-150 opacity-50 -z-10"></div>
        <div className="absolute top-40 left-0 right-0 mx-auto text-center">
          <h1 className="text-3xl ease-in-out duration-500 hover:text-white font-bold">
            Groovy Frens
          </h1>
          <button className="mt-8 ease-in-out duration-500 bg-transparent hover:bg-white text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded text-center">
            Connect Wallet
          </button>
        </div>
      </main>
    </div>
  );
}
