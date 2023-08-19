"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import RenderProjects from "@/components/projects/RenderProjects";

const ProjectsPage: React.FC = () => {
  // NOTE Fetch the data from the JSON file inside the /public/data directory
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("/data/projectData.json");
        setProjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);
  return (
    <main className="flex-[80%] text-white grid grid-cols-1 p-4 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RenderProjects projects={projects} />
    </main>
  );
};

export default ProjectsPage;
