interface RenderNameProps {
  name: string;
}

const RenderName: React.FC<RenderNameProps> = ({ name }) => {
  return <h1 className="font-bold text-white">{name}</h1>;
};

export default RenderName;
