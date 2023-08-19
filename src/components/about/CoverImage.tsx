import Image, { StaticImageData } from "next/image";

interface CoverImageProps {
  img: StaticImageData;
  name: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ img, name }) => {
  return (
    <div className="relative h-72">
      <Image
        src={img}
        alt={name}
        fill={true}
        className="absolute object-cover md:rounded-xl"
      />
    </div>
  );
};

export default CoverImage;
