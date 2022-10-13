import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";
import { Collection } from "../typings";
interface Props {
  collections: Collection[];
}
const Home = ({ collections }: Props) => {
  return (
    <div className="max-w-full mx-auto flex flex-col min-h-screen py-20 px-10 2xl:px-0 bg-gradient-to-br from-lime-300 to-red-300 rounded-xl">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/nft.png" />
      </Head>
      <h1 className="uppercase mb-10 text-4xl font-extralight text-center">
        {" "}
        The{" "}
        <span className="font-extrabold underline decoration-rose-500/60">
          DIGITAL APES
        </span>{" "}
        NFT MarketPlace
      </h1>
      <main className="bg-gradient-to-br from-lime-200 to-red-200 p-10 shadow-xl shadow-rose-400/20">
        <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collections.map((collection) => (
            <Link href={`/nft/${collection.slug.current}`}>
              <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-110">
                <img
                  className="h-96 w-60 rounded-2xl object-cover"
                  src={urlFor(collection.mainImage).url()}
                />
                <div className="p-5">
                  <h2 className="text-3xl">{collection.title}</h2>
                  <p className="mt-2 text-l text-black-400">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async () => {
  const query = `
*[_type=="collection"]{
  _id,
  title,
  address,
  description,
  nftCollectionName,
  mainImage{
    asset
  },
  previewImage{
    asset
  },slug{
    current
  },
  creator->{
    _id,name,address,slug{current},
  },

}
`;
  const collections = await sanityClient.fetch(query);
  return { props: { collections } };
};
