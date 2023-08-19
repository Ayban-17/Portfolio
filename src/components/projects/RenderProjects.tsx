import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RenderProjectsProps {
  projects: {
    id: number;
    name: string;
    img: string;
  }[];
}

const RenderProjects: React.FC<RenderProjectsProps> = ({ projects }) => {
  return (
    <>
      {projects.map(({ id, name, img }) => (
        <Link key={id} href={`/projects/${id}`}>
          <div className="h-56  sm:h-[100%] relative rounded-3xl overflow-hidden image-container">
            <Image src={img} alt="Project" width={420} height={100} />
            <h1 className="z-10 w-60 absolute bottom-10 label-hidden bg-yellow-500 text-black font-semibold  p-4 rounded-e-3xl ">
              {name}
            </h1>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RenderProjects;
