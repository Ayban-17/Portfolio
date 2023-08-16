import RenderHeroText from "@/components/home/RenderHeroText";
import hero from "../../public/grad2.png";
import RenderHeroImage from "@/components/home/RenderHeroImage";

export default function Home() {
  return (
    <main className="flex-[80%] grid grid-cols-1 lg:grid-cols-2 relative">
      <RenderHeroText
        greet="👋 Hello, I'm Ayban!"
        headline="Full Stack Developer"
        subHeadline={
          <>
            Welcome to my digital space where creativity meets technology.
            I&apos;m a passionate{" "}
            <span className="text-yellow-300"> Full Stack Developer</span>.
            Through a blend of innovation and dedication, I bring ideas to life
            and create digital experiences that leave a lasting impact.
          </>
        }
      />
      <RenderHeroImage hero={hero} />
    </main>
  );
}
