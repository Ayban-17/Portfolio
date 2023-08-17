import RenderName from "./RenderName";
import RenderSocials from "./RenderSocials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 mt-10 md:mt-0 md:flex-row md:justify-between md:items-center h-16  md:flex-[10%] md:px-8 md:py-16">
      <RenderName name="Mark Ivan Hernandez" />
      <RenderSocials />
    </footer>
  );
};

export default Footer;
