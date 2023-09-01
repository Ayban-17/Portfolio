import Link from "next/link";
import React from "react";

interface RenderProjectsProps {
  projects: {
    id: number;
    name: string;
    desc: string;
    liveUrl: string;
    repoUrl: string;
  }[];
}

const RenderProjects: React.FC<RenderProjectsProps> = ({ projects }) => {
  return (
    <>
      {projects.map(({ id, name, desc, liveUrl, repoUrl }) => (
        <div className="project-container min-h-56 p-4" key={id}>
          <h1 className="text-4xl font-bold mb-6">{name}</h1>
          <p className="text-sm font-thin leading-loose text-justify">{desc}</p>
          <div className="flex gap-4 mt-6">
            <Link
              href={repoUrl}
              target="_blank"
              className="hover:text-[yellow] border-l-4 pl-4"
            >
              Repository
            </Link>
            <Link
              href={liveUrl}
              target="_blank"
              className="hover:text-[yellow] border-l-4 pl-4"
            >
              Live Demo
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RenderProjects;
