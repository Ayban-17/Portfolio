import Image from "next/image";

const RenderDesigns = () => {
  return (
    <>
      <Image
        src="/designTR.png"
        alt="design Top right"
        width={1000}
        height={500}
        className="absolute -top-[40%] -right-[60%] -z-10"
      />
      <Image
        src="/designTL.png"
        alt="design Top right"
        width={1000}
        height={500}
        className="absolute -top-[350px] -left-[300px] -z-10"
      />
      <Image
        src="/designBL.png"
        alt="design Top right"
        width={1000}
        height={500}
        className="absolute -bottom-[40%] -left-[500px] -z-10"
      />
    </>
  );
};

export default RenderDesigns;
