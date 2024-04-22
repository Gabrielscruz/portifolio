"use client";

import { useState } from "react";

import classNames from "classnames";

import {
  HiBars3BottomRight,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftRight,
  HiOutlineFolder,
  HiOutlineHome,
  HiOutlineUser,
} from "react-icons/hi2";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <aside className="flex h-screen gap-2  transition-all">
      <div
        id="navbar"
        className={classNames(
          "flex flex-col h-screen shadow-sm justify-between items-center",
          !isOpen ? "w-20 max-md:hidden" : "w-52 max-md:w-20"
        )}
      >
        <div className="font-extrabold text-2xl p-2">
          G<strong className="text-primary">.</strong>
        </div>

        <div className="flex h-full">
          <div className="flex flex-col w-full text-lg justify-center items-center transition-none gap-4  overflow-auto">
            <button
              className={classNames(
                "flex w-36 gap-2  items-center hover:text-primary",
                !isOpen
                  ? "justify-center"
                  : "justify-start max-md:justify-center"
              )}
            >
              <HiOutlineHome className="w-6 h-6" />
              {isOpen && <span className="max-md:hidden">Home</span>}
            </button>

            <button
              className={classNames(
                "flex w-36 gap-2  items-center hover:text-primary",
                !isOpen
                  ? "justify-center"
                  : "justify-start max-md:justify-center"
              )}
            >
              <HiOutlineUser className="w-6 h-6" />
              {isOpen && <span className="max-md:hidden">Sobre</span>}
            </button>

            <button
              className={classNames(
                "flex w-36 gap-2  items-center hover:text-primary",
                !isOpen
                  ? "justify-center"
                  : "justify-start max-md:justify-center"
              )}
            >
              <HiOutlineBriefcase className="w-6 h-6" />
              {isOpen && <span className="max-md:hidden">Experiencia</span>}
            </button>
            

            <button
              className={classNames(
                "flex w-36 gap-2  items-center hover:text-primary",
                !isOpen
                  ? "justify-center"
                  : "justify-start max-md:justify-center"
              )}
            >
              <HiOutlineFolder className="w-6 h-6" />
              {isOpen && <span className="max-md:hidden">Projetos</span>}
            </button>
            <button
              className={classNames(
                "flex w-36 gap-2  items-center hover:text-primary",
                !isOpen
                  ? "justify-center"
                  : "justify-start max-md:justify-center"
              )}
            >
              <HiOutlineChatBubbleLeftRight className="w-6 h-6" />
              {isOpen && <span className="max-md:hidden">Contato</span>}
            </button>
          </div>
        </div>

        <div className="flex w-full h-36 text-nowrap justify-start items-start">
          <span className="text-sm rotate-90 text-primary">2024 - 2019</span>
        </div>
      </div>

      <button
        className={classNames(
          "p-2 m-2 absolute top-0",
          !isOpen ? "left-20 max-md:left-0" : "left-52 max-md:left-20"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiBars3BottomRight className="w-6 h-6 hover:text-primary" />
      </button>
    </aside>
  );
}
