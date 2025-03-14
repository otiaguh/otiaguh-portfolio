import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsGithub, BsTwitter, BsArrowDown } from "react-icons/bs";
import { SiLua, SiTailwindcss } from "react-icons/si";
import { DiReact, DiJavascript1 } from "react-icons/di";
import { TbBrandTypescript, TbBrandNextjs, TbWorldWww } from "react-icons/tb";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tiago Silva - Portfólio</title>
        <meta name="description" content="Portfólio pessoal." />
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-900 text-neutral-200">
        <section
          className="item-center flex h-screen flex-col justify-center"
          id=""
        >
          <div className="flex -translate-y-28 flex-col items-center justify-center">
            <Image
              className="m-2 rounded-full"
              src="/icon.jpeg"
              alt="Icon"
              width={225}
              height={225}
            />
            <div className="flex flex-col">
              <div className="flex items-center justify-center text-4xl font-bold">
                Tiago Silva
              </div>

              <div className="text-large m-2 text-center font-light">
                Full-stack Developer<br></br>Sines, Portugal
              </div>

              <div className="flex flex-row items-center justify-center">
                <Link href="https://discord.gg/" target="_blank">
                  <BsDiscord className="m-1 h-6 w-6 " />
                </Link>
                <Link href="https://github.com/otiaguh" target="_blank">
                  <BsGithub className="m-1 h-6 w-6" />
                </Link>
                <Link href="https://twitter.com/otiaguh" target="_blank">
                  <BsTwitter className="m-1 h-6 w-6 " />
                </Link>
              </div>

              <div className="mt-20 flex items-center justify-center text-center text-2xl">
                <p>
                  Olá, eu sou o
                  <span className=" text-lime-200"> Tiago Silva</span>, tenho
                  <span className=" text-lime-200 "> 17 anos</span>, vivo em
                  <span className="text-lime-200"> Sines, Portugal</span>
                  <br /> e sou desenvolvedor
                  <span className="text-lime-200"> Full-Stack</span>.
                </p>
              </div>

              <div className="flex translate-y-40 animate-pulse items-end justify-center">
                <Link href="#about">
                  <BsArrowDown className="h-14 w-14" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="item-center flex h-screen flex-col justify-center"
          id="about"
        >
          <div className="flex -translate-y-80 flex-col items-center justify-center text-xl font-bold ">
            <h2>
              MAIS SOBRE <span className="text-lime-200">MIM</span>
            </h2>
          </div>
          <div className="flex -translate-y-56 items-center justify-center text-center">
            <p className="mx-4 md:w-1/2">
              Olá, o meu nome é Tiago Silva e sou um desenvolvedor full stack
              que está sempre à procura de novas tecnologias para aprimorar o
              meu trabalho. Atualmente, estou a aprender e a trabalhar com
              linguagens como Lua, Javascript e Typescript. Com elas, tenho
              criado bots para Discord e desenvolvido aplicações web com
              frameworks como NextJs e bibliotecas como React e TailwindCss. O
              meu objetivo é continuar a evoluir como desenvolvedor e criar
              soluções que possam ajudar as pessoas nas suas tarefas diárias.
            </p>
          </div>
          <div className="flex -translate-y-20 flex-col items-center justify-center text-xl font-bold ">
            <h2>
              TECNOLOGIAS <span className="text-lime-200">TRABALHADAS</span>
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-4xl">
            <SiLua />
            <DiJavascript1 />
            <TbBrandTypescript />
            {/*<DiReact />*/}
            <TbBrandNextjs />
            <SiTailwindcss />
          </div>
          <div className="flex translate-y-40 animate-pulse items-end justify-center">
            <Link href="#projects">
              <BsArrowDown className="h-14 w-14" />
            </Link>
          </div>
        </section>

        <section
          className="item-center flex h-screen flex-col justify-center"
          id="projects"
        >
          <div className="flex -translate-y-72 flex-col items-center justify-center text-xl font-bold ">
            <h2>
              <span className="text-lime-200">PROJETOS</span>
            </h2>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex -translate-y-64 flex-col items-center justify-center rounded-lg border-2 border-lime-200">
              <Image
                className="m-2 rounded-full"
                src="/isla.png"
                alt="IslaLOGO"
                width={195}
                height={195}
              />
              <div>
                <h2 className="font-bold">Isla RP</h2>
              </div>
              <div className="mb-1 flex flex-row">
                <h3 className="font-medium">Ended</h3>
              </div>
            </div>
            <div className="flex -translate-y-64 flex-col items-center justify-center rounded-lg border-2 border-lime-200">
              <Image
                className="m-2 flex rounded-full"
                src="/northward.png"
                alt="northwarLogo"
                width={195}
                height={195}
              />
              <div>
                <h2 className="font-bold">Northward RP</h2>
              </div>
              <div className="mb-1 flex flex-row">
                <h3 className="font-medium">Ended</h3>
              </div>
            </div>
            <div className="flex -translate-y-64 flex-col items-center justify-center rounded-lg border-2 border-lime-200">
              <Image
                className="m-2 flex rounded-full"
                src="/logo-white.png"
                alt="atlas-logo"
                width={195}
                height={195}
                
              />
              <div>
                <h2 className="font-bold">ATLAS</h2>
              </div>
              <div className="mb-1 flex flex-row">
                <h3 className="font-medium">Em desenvolvimento...</h3>
              </div>
            </div>
          </div>
          <div className="flex translate-y-32 rotate-180 animate-pulse items-end justify-center">
            <Link href="#">
              <BsArrowDown className="h-14 w-14" />
            </Link>
          </div>
          <div>
            <h6 className="flex translate-y-72 items-end justify-center text-xs text-zinc-700">
              2023 © Tiago Silva. All rigths reserved.
            </h6>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
