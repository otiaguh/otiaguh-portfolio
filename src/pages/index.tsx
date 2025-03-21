import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const UpdatePage = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <>
      <Head>
        <title>Portfólio Descontinuado</title>
        <meta name="description" content="Portfólio pessoal." />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <div className="flex h-screen flex-col items-center justify-between bg-zinc-900 text-neutral-200 p-4">
        <div className="flex flex-grow items-center justify-center">
          <h1
            className={`text-2xl md:text-4xl font-bold text-center transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
          >
            Este portfólio foi descontinuado,{' '}
            <Link href="https://tiagosdev.vercel.app">
              <span className="text-lime-200 cursor-pointer hover:underline">clique aqui</span>
            </Link>{' '}
            para acessar o novo.
          </h1>
        </div>
        <div className="pb-4 text-center">
          <h6 className="text-xs text-zinc-700">2025 © Tiago Vieira da Silva. All rights reserved.</h6>
        </div> 
      </div>
    </>
  );
};

export default UpdatePage;
