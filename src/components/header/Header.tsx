import RenderLogo from "./RenderLogo";
import RenderNavigations from "./RenderNavigations";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 flex-[10%] lg:px-0">
      <RenderLogo width={100} height={50} />
      <RenderNavigations />
    </header>
  );
};

export default Header;
