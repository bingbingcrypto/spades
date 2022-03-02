import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Header";

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
        <Nav />
        <div className="h-screen sm:bg-animephone md:bg-animefull bg-cover py-96 bg-center-bottom p-150 opacity-50 -z-10">
          {/* <Image
            src="s"
            layout="fill"
            quality={100}
            alt="Azuki Prototype App"
            objectFit="cover"
            loader={myLoader}
          /> */}
        </div>
      </main>
    </div>
  );
}
