import Link from "next/link";
interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Link
      href="/projects"
      className="text-black text-xl font-bold cursor-pointer w-fit px-4 py-2 bg-yellow-300"
    >
      {title}
    </Link>
  );
};

export default Button;
