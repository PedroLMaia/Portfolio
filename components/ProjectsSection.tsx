import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "VGA Store",
    description:
      "Primeiro projeto do curso de Análise e Desenvolvimesnto de Sistemas, projeto de uma loja E-commerce de eletrônicos, usando somente HTML e CSS puro.",
    image: "/ecom.png",
    github: "https://github.com/PedroLMaia/Projeto_Loja_HTML_CSS",
    link: "https://pedrolmaia.github.io/Projeto_Loja_HTML_CSS",
  },
  {
    name: "Portfolio",
    description: "Este é o meu portfólio pessoal online, desenvolvido utilizando as tecnologias Next.js e Tailwind CSS.",
    image: "/port.png",
    github: "https://github.com/PedroLMaia/Portfolio",
    link: "https://pedrolmaia.github.io/Portfolio/",
  },
  {
    name: "GPT-Voice App",
    description: "O Jarvis é um assistente que fornece transcrição de voz para texto e respostas utilizando a API da OpenAI. Com o Jarvis, você pode interagir facilmente com a IA usando sua voz e receber respostas úteis em retorno.",
    image: "/jar.png",
    github: "https://github.com/PedroLMaia/GPT-Voice",
    link: "https://pedrolmaia.github.io/GPT-Voice/",
  },
]

const ProjectsSection = () => {
  const pairedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-gray-800 dark:text-neutral-100">
        Projetos
        <hr className="w-7 h-1 mx-auto my-4 bg-black border-0 rounded bg-gray-600 dark:bg-neutral-100"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {pairedProjects.map((pair, idx) => (
          <div key={idx} className="flex space-x-12">
            {pair.map((project, projectIdx) => (
              <div key={projectIdx} className="flex-grow w-1/2">
                <div className="flex flex-col">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={800}
                      height={600}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                  <div className="mt-6">
                    <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Adicionar espaço em branco se o par não estiver completo */}
            {pair.length < 2 && (
              <div className="flex-grow w-1/2"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
