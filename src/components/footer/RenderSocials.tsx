import Image from "next/image";
import instagram from "../../../public/instagram.svg";
import facebook from "../../../public/facebook.svg";
import x from "../../../public/x.svg";
import github from "../../../public/github.svg";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    icon: instagram,
    href: "https://www.instagram.com/ybnhrnndz/",
  },
  {
    name: "Facbook",
    icon: facebook,
    href: "https://www.facebook.com/markivan.hernandez",
  },
  {
    name: "X",
    icon: x,
    href: "https://twitter.com/ybnhrnndz",
  },
  {
    name: "Github",
    icon: github,
    href: "https://www.instagram.com/ybnhrnndz/",
  },
];

const RenderSocials = () => {
  return (
    <div className="flex gap-8">
      {socials.map(({ name, icon, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className="hover:scale-125"
        >
          <Image src={icon} alt={name} width={30} height={30} />
        </Link>
      ))}
    </div>
  );
};

export default RenderSocials;
