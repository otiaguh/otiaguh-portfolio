import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Atlas: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiago Silva - Atlas</title>
        <meta name="description" content="Projeto Atlas" />
        <link rel="icon" href="/logo-white-no.png" />
      </Head>
      <main className="min-h-screen bg-zinc-900 text-neutral-200">
        <div className="">
          <Image
            className="flex top-10"
            src="/logo-white.png"
            alt="Logo ATLAS"
            width={250}
            height={250}
          />
        </div>
      </main>
    </>
  );
};

export default Atlas;
