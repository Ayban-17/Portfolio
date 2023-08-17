import Button from "../shared/Button";

interface RenderHeroTextProps {
  greet: string;
  headline: string;
  subHeadline: React.ReactNode;
}

const RenderHeroText: React.FC<RenderHeroTextProps> = ({
  greet,
  headline,
  subHeadline,
}) => {
  return (
    <div className="flex flex-col gap-8 p-4 justify-center home md:px-32 lg:p-0">
      <h1 className="text-white text-2xl text-center lg:text-left">{greet}</h1>
      <h2 className="text-white font-bold text-3xl text-center md:text-5xl lg:text-left">
        {headline}
      </h2>
      <p className="text-white text-xs text-justify leading-loose">
        {subHeadline}
      </p>
      <Button title="My Projects" />
    </div>
  );
};

export default RenderHeroText;
