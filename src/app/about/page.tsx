import CoverImage from "@/components/about/CoverImage";
import img from "/public/cover.jpg";
import React from "react";
import AboutNav from "@/components/about/AboutNav";
import RenderActiveNav from "@/components/about/RenderActiveNav";

const AboutPage = () => {
  return (
    <main className="flex-[80%] ">
      <CoverImage img={img} name="cover" />
      <AboutNav />
      <RenderActiveNav />
    </main>
  );
};

export default AboutPage;
