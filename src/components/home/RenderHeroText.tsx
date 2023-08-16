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
    <div className="flex flex-col gap-8 justify-center home">
      <h1 className="text-white text-2xl animate__fadeInLeft">{greet}</h1>
      <h2 className="text-white font-bold text-5xl ">{headline}</h2>
      <p className="text-white text-xs text-justify leading-loose">
        {subHeadline}
      </p>
      <Button title="My Projects" />
    </div>
  );
};

export default RenderHeroText;
