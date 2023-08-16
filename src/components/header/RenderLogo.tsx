import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

interface RenderLogoProps {
  width: number;
  height: number;
}

const RenderLogo: React.FC<RenderLogoProps> = ({ width, height }) => {
  return (
    <Link href="/">
      <Image src={logo} alt="My Logo" width={width} height={height} />
    </Link>
  );
};

export default RenderLogo;
