import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
function NFTDropPage() {
  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10 ">
      {/* Left*/}

      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl">
            <img
              src="https://links.papareact.com/8sg"
              alt=""
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>

          <div className="text-center p-5 space-y-2 ">
            <h1 className="text-4xl font-bold text-white">
              WE ARE THE DIGITAL APES
            </h1>
            <h2 className="text-xl text-gray-300">
              Digital NFT Apes is where you belong. Join us in the world of NFTs
              !
            </h2>
          </div>
        </div>
      </div>
      {/*Right*/}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/*Header */}
        <header className="flex items-center justify-between">
          <h1 className="uppercase w-52 cursor-pointer text-xl font-extralight sm:w-80">
            {" "}
            The{" "}
            <span className="font-extrabold underline decoration-rose-500/60">
              DIGITAL APES
            </span>{" "}
            NFT Market
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="uppercase rounded-full bg-rose-500 px-4 text-xs text-white font-bold py-2 lg:px-5 lg:py-3 lg:text-base "
          >
            {address ? "Sign Out" : "Sign In"}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            {" "}
            You're logged in with{" "}
            <span className="uppercase font-bold">
              {address.substring(0, 5)}...
              {address.substring(address.length - 5)}
            </span>{" "}
            wallet
          </p>
        )}

        {/*Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className=" text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {" "}
            THE DIGITAL APE CLUB | DROPPING THE LATEST NFTS
          </h1>
          <p className="pt-2 text-xl text-green-500 uppercase">
            {" "}
            15/23 NFT's claimed
          </p>
        </div>
        {/*Mint Button */}
        <button className="h-16 bg-rose-500 font-bold text-white rounded-full">
          {" "}
          MINT NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
