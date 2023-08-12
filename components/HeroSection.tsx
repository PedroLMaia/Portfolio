"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-30 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 dark:grayscale ...">
          <Image
            src="/pedro.png"
            alt=""
            width={325}
            height={325}
            className="rounded-xl drop-shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl text-gray-800 dark:text-neutral-100">Olá, </h1>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl text-gray-800 dark:text-neutral-100">seja bem-vindo!</h1>

          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Me chamo{" "}
            <span className="font-semibold text-gray-800 dark:text-neutral-100">
              Pedro {" "}
            </span>
            e sou um{" "}
            <span className="font-semibold text-gray-800 dark:text-neutral-100">
            Desenvolvedor de Software {" "}
            </span>
            apaixonado por criar soluções que tornem a vida mais fácil e significativa. 
            Convido você a explorar meu portfólio, onde compartilho criações que refletem meu compromisso 
            em transformar ideias em realidade e melhorar 
            a vida através do código. Estou ansioso para compartilhar meus projetos com você. 
            Obrigado por estar aqui!
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-gray-800 rounded shadow hover:bg-gray-900 dark:bg-neutral-100 dark:text-black"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-gray-800 dark:text-neutral-100" />
        </Link>
        
      </div>
    </section>
  )
}

export default HeroSection
