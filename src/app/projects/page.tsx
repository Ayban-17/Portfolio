"use client";
import Image from "next/image";
import img from "/public/projects/apps.jpg";
import React from "react";

const ProjectsPage = () => {
  return (
    <main className="flex-[80%] text-white grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container ">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container ">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container ">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container ">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
      <div className="h-56 sm:h-[100%] relative rounded-3xl overflow-hidden image-container ">
        <Image
          src={img}
          alt="Project"
          fill={true}
          className="absolute object-cover hover:scale-110 animation  ease-in-out duration-700"
        />
        <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
          Expense Monitoring App
        </h1>
      </div>
    </main>
  );
};

export default ProjectsPage;
