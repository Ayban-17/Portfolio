import Link from "next/link";

const IntroductionSection = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 p-4 lg:gap-0">
        <h1
          id="introduction"
          className="text-center text-2xl font-bold lg:text-left "
        >
          👋 Hey there
        </h1>
        <p className="text-justify lg:col-start-1 leading-loose font-thin lg:mr-8">
          At the age of <span className="text-[#F5DD0F]">23</span>, residing in
          the serene landscapes of{" "}
          <span className="text-[#F5DD0F]"> Bulacan</span>, you&apos;ll find me
          diving into the world of{" "}
          <span className="text-[#F5DD0F]">technology and coding</span>. Mark
          Ivan Hernandez is the name that appears on my official documents, but
          I resonate more with the moniker{" "}
          <span className="text-[#F5DD0F]">Ayban</span>. It encapsulates my
          identity and energy perfectly.
        </p>
        <p className="text-justify lg:col-start-2 lg:row-start-1 lg:row-end-3 leading-loose font-thin ">
          As an <span className="text-[#F5DD0F]">ISTJ</span>, I&apos;m known for
          my practical and organized approach to life. This quality naturally
          flows into my development work, where I merge innovation with
          methodical thinking to create impactful digital solutions. I find joy
          in the intricate dance between aesthetics and functionality, and
          it&apos;s this passion that fuels my journey as a{" "}
          <span className="text-[#F5DD0F]">Full Stack Developer</span>
          <br />
          <br />
          Wanna know more about me?{" "}
          <span className="text-[#F5DD0F]">
            <Link href="/contact">Contact Me!</Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
