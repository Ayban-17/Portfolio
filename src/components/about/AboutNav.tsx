"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const navigations = ["Introduction", "Achievements", "Certificates"];

const AboutNav = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPath = searchParams.get("section");

  return (
    <nav>
      {/* Web */}
      <div className="hidden text-white font-bold text-lg md:flex gap-20 justify-center p-4 ">
        {navigations.map((navigation, index) => (
          <button
            key={index}
            onClick={() => router.push(`/about?section=${navigation}`)}
            className={`font-bold text-white hover:text-yellow-200 ${
              navigation === currentPath ? "text-yellow-400" : ""
            }`}
          >
            {navigation}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="flex text-white font-bold text-lg md:hidden gap-20 justify-center p-4">
        {navigations.map((navigation, index) => (
          <button
            key={index}
            onClick={() => router.push(`/about?section=${navigation}`)}
          >
            <div
              className={`border-2 w-6 h-6 rounded-full ${
                navigation === currentPath ? "bg-yellow-400 border-0" : ""
              }`}
            ></div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default AboutNav;
