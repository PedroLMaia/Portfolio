import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "AI Horizon",
    description:
      "A Plataforma AI Horizon é um serviço baseado em SaaS, que aproveita as APIs da OpenAI e da Replicate, além de integrar diversos outros recursos como Stripe, Clerk e Crisp-chat com webhooks. Foi desenvolvida utilizando Next 13, Tailwind CSS, Prisma e MySQL com a plataforma de banco de dados PlanetScale. Também inclui integração com Stripe para pagamentos, Clerk para autenticação e Crisp-chat para criar um chat de suporte.",
    image: "/ai-horizon.png",
    github: "https://github.com/PedroLMaia/AIHorizon",
    link: "https://ai-horizon.vercel.app/",
  },
  {
    name: "Tailwind CSS",
    description:
      "Aplicação desenvolvida com a utilização das tecnologias React, Next.js e Tailwind CSS por meio do curso da Cod3r - React/Next.js com Tailwind CSS. Esta aplicação permitiu aprofundar os conhecimentos e habilidades em front-end, resultando nessa interface moderna e pratica.",
    image: "/next-tailwind-cod3r.png",
    github: "https://github.com/PedroLMaia/React-Next",
    link: "https://next-tailwind-cod3r.vercel.app/",
  },
  {
    name: "Habits",
    description:
      "O Habits é um aplicativo que ajuda os usuários a controlar suas tarefas diárias, monitorando as atividades realizadas e não realizadas. Projeto criado durante a NLW Setup 2023, usando React, Tailwind, Prisma e Typescript.",
    image: "/habits.png",
    github: "https://github.com/PedroLMaia/nlw-setup-habits",
    link: "https://habits-nlw-2023.vercel.app/",
  },{
    name: "VGA Store",
    description:
      "Primeiro projeto do curso de Análise e Desenvolvimesnto de Sistemas, projeto de uma loja E-commerce de eletrônicos, usando somente HTML e CSS puro.",
    image: "/ecom.png",
    github: "https://github.com/PedroLMaia/Projeto_Loja_HTML_CSS",
    link: "https://pedrolmaia.github.io/Projeto_Loja_HTML_CSS",
  },
  {
    name: "Portfólio",
    description: "Este é o meu portfólio pessoal online, desenvolvido utilizando as tecnologias Next.js e Tailwind CSS.",
    image: "/port.png",
    github: "https://github.com/PedroLMaia/Portfolio",
    link: "https://pedro-luiz.vercel.app/",
  },
  {
    name: "Jarvis - IA Assistant",
    description: "O Jarvis é um assistente que fornece transcrição de voz para texto e respostas utilizando a API da OpenAI. Com o Jarvis, você pode interagir facilmente com a IA usando sua voz e receber respostas úteis em retorno.",
    image: "/jar.png",
    github: "https://github.com/PedroLMaia/Jarvis-GPT",
    link: "https://jarvis-ia.vercel.app/",
  }, 
  {
    name: "Spotify - HTML e CSS",
    description: "Uma simples pagina do Spotify feita com html e css puro.",
    image: "/spotify-html-css.png",
    github: "https://github.com/PedroLMaia/Spotify-html-clone",
    link: "https://pedrolmaia.github.io/Spotify-html-clone/",
  }, 
  {
    name: "Space Invaders",
    description: "Jogo Space Invaders construído completamente do zero usando somente JavaScrip e HTML. Projeto de avaliação final da disciplina de Raciocínio logico e algoritmo - Unifor.",
    image: "/space-invaders.png",
    github: "https://github.com/PedroLMaia/Space_Invaders_Project",
    link: "https://pedrolmaia.github.io/Space_Invaders_Project/",
  }
]

const ProjectsSection = () => {
  const pairedProjects = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairedProjects.push(projects.slice(i, i + 2));
  }

  return (
    <section className="animate-fadeIn" id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-gray-800 dark:text-neutral-100">
        Projetos
        <hr className="w-7 h-1 mx-auto my-4 border-0 rounded bg-gray-600 dark:bg-neutral-100"></hr>
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
