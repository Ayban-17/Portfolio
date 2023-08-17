"use client";
import Image from "next/image";
import Link from "next/link";
import menu from "../../../public/menu.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

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

const RenderNavigations: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const currentPath = usePathname();
  return (
    <nav>
      {/* Web */}
      <ul className="hidden sm:flex sm:gap-4">
        {navigations.map(({ path, name }, index) => (
          <Link href={path} key={index}>
            <li
              className={`font-bold text-white hover:text-yellow-200 ${
                path === currentPath ? "text-yellow-400" : ""
              }`}
            >
              {name}
            </li>
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
        <ul className="p-4 absolute right-4 flex flex-col gap-4 bg-yellow-500 z-10">
          {navigations.map(({ path, name }, index) => (
            <Link
              href={path}
              key={index}
              onClick={() => setOpen(!open)}
              className="link"
            >
              <li
                className={`font-bold text-white ${
                  currentPath === path ? "active" : ""
                }`}
              >
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
