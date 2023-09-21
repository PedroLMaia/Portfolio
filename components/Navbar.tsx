import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"; // Importação dos ícones do LinkedIn e GitHub

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Sobre",
    page: "about",
  },
  {
    label: "Projetos",
    page: "projects",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  
  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-black dark:border-b dark:border-black animate-fadeInNav">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-gray-800 cursor-pointer dark:text-neutral-100">
                  Portfólio - Pedro Luiz
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-3.5 md:flex md:space-x-1 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "flex justify-center lg:inline-block text-neutral-900 hover:-translate-y-1 transition-transform cursor-pointer hover:text-neutral-100 hover:bg-gray-900 dark:text-neutral-100 dark:hover:text-black dark:hover:bg-white px-3 py-2 rounded-lg  "
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://www.linkedin.com/in/PedroLMaia/"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center lg:inline-block text-neutral-900 hover:-translate-y-1 transition-transform hover:text-neutral-100 hover:bg-gray-900 dark:text-neutral-100 dark:hover:text-black dark:hover:bg-white px-2 py-2 rounded-lg"
              >
                <AiOutlineLinkedin size={25} />
              </a>
              <a
                href="https://github.com/PedroLMaia"
                rel="noreferrer"
                target="_blank"
                className="flex justify-center lg:inline-block text-neutral-900 hover:-translate-y-1 transition-transform hover:text-neutral-100 hover:bg-gray-900 dark:text-neutral-100 dark:hover:text-black dark:hover:bg-white px-2 py-2 rounded-lg"
              >
                <AiOutlineGithub size={25} />
              </a>
              {theme === 'light' ? (
              <a
                onClick={() => setTheme('dark')}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer flex justify-center lg:inline-block text-neutral-900 hover:-translate-y-1 transition-transform hover:text-neutral-100 hover:bg-gray-900 dark:text-neutral-100 dark:hover:text-black dark:hover:bg-white px-2 py-2 rounded-lg"
              >
                <RiSunLine size={25}/>
              </a>) :(
                <a
                onClick={() => setTheme('light')}
                rel="noreferrer"
                target="_blank"
                className="cursor-pointer flex justify-center lg:inline-block text-neutral-900 hover:-translate-y-1 transition-transform hover:text-neutral-100 hover:bg-gray-900 dark:text-neutral-100 dark:hover:text-black dark:hover:bg-white px-2 py-2 rounded-lg"
              >
                <RiMoonFill size={25}/>
              </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}