import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "React" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MongoBD" },
  { skill: "MySQL" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 animate-fadeIn">
        <h1 className="text-center font-bold text-4xl text-gray-800 dark:text-neutral-100">
          Sobre
          <hr className="w-7 h-1 mx-auto my-4 bg-gray-600 border-0 rounded dark:bg-neutral-100"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left text-gray-800 dark:text-neutral-100">
              Conheça-me!
            </h1>
            <p>
              Olá, meu nome é {" "}
              <span className="font-bold text-gray-600 dark:text-neutral-100">{"Pedro Luiz"}</span>
              , sou um desenvolvedor de software{" "}
              <span className="font-bold text-gray-600 dark:text-neutral-100">{"altamente motivado"}</span>,
              <span className="font-bold text-gray-600 dark:text-neutral-100">{" focado"}</span> e
              <span className="font-bold text-gray-600 dark:text-neutral-100">{" determinado"}</span> que atualmente reside em Fortaleza.
            </p>
            <br />
            <p>
            Sou graduado em <span className="font-bold text-gray-600 dark:text-neutral-100">{" Análise e Desenvolvimento de Sistemas "}</span> 
            pela Universidade de Fortaleza - Unifor e atualmente, estou cursando uma pós-graduação em 
            <span className="font-bold text-gray-600 dark:text-neutral-100">{" Engenharia de Software com foco em DevOps "}</span> pela Unifor.
            </p>
            <br />
            <p>
            Nutro uma verdadeira paixão pela programação, a qual impulsiona minha mentalidade e alimenta minha constante busca por aprendizado.
            </p>
            <br />
            <p>
            Acredito firmemente no conceito de{" "}
              <span className="font-bold text-gray-600 dark:text-neutral-100">
              crescimento contínuo
              </span>{" "}
              e por isso, estou sempre empenhado em expandir meus conhecimentos e habilidades. Minha dedicação à tecnologia é motivada pela busca incessante por desafios que expandam os limites do que é possível.
            </p>
            <br />
            <p>Estou animado para traçar o caminho da minha carreira e recebo com entusiasmo todas as novas oportunidades que surgirem no horizonte.</p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-neutral-100">Habilidades</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-800 px-4 py-2 mr-2 mt-2 text-gray-200 rounded font-semibold dark:bg-neutral-100 dark:text-black"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/geto.png"
              alt=""
              width={500}
              height={500}
              className="hidden md:block md:relative md:bottom-4 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
