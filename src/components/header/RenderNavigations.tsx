"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "../../../public/menu.svg";
import { useState } from "react";

const navigations = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const RenderNavigations = () => {
  const [open, setOpen] = useState<boolean>();

  return (
    <nav>
      {/* Web */}
      <ul className="hidden sm:flex sm:gap-4">
        {navigations.map(({ path, name }, index) => (
          <Link href={path} key={index}>
            <li className="font-bold text-white hover:text-gray-300">{name}</li>
          </Link>
        ))}
      </ul>

      {/* Mobile */}

      <Image
        src={menu}
        alt="Menu"
        width={50}
        height={50}
        onClick={() => setOpen(!open)}
        className="sm:hidden"
      />

      {open && (
        <ul className="border-2 p-4 absolute right-4 flex flex-col gap-4 bg-black">
          {navigations.map(({ path, name }, index) => (
            <Link href={path} key={index}>
              <li className="font-bold text-white hover:text-gray-300">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default RenderNavigations;
