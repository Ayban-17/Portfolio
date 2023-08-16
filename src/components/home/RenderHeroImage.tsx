import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
interface RenderHeroImageProps {
  hero: string | StaticImport;
}

const RenderHeroImage: React.FC<RenderHeroImageProps> = ({ hero }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="home-image">
        <Image
          src={hero}
          alt="hero"
          className="lg:h-96 lg:w-80 rounded-full "
        />
      </div>
    </div>
  );
};

export default RenderHeroImage;
