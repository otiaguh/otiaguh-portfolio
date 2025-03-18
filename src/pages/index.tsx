import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

const UpdatePage = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <><Head>
      <title>Portfólio Descontinuado</title>
      <meta name="description" content="Portfólio pessoal." />
      <link rel="icon" href="/icon.jpeg" />
    </Head><div className="flex h-screen items-center justify-center bg-zinc-900 text-neutral-200">
        <h1
          className={`text-2xl md:text-4xl font-bold text-center transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
        >
          Este portfólio está a ser atualizado,{' '}
          <Link href="/outdate">
            <span className="text-lime-200 cursor-pointer hover:underline">clique aqui</span>
          </Link>{' '}
          para acessar o antigo.
        </h1>
      </div></>
  );
};

export default UpdatePage;
