import RenderName from "./RenderName";
import RenderSocials from "./RenderSocials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 mt-10 lg:mt-0 lg:flex-row lg:justify-between lg:items-center h-16  lg:flex-[10%]">
      <RenderName name="Mark Ivan Hernandez" />
      <RenderSocials />
    </footer>
  );
};

export default Footer;
