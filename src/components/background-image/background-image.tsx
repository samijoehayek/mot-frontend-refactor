import React from "react";
import Image from "next/image";

interface ImageProps {
  imageName: string;
  largeWidth?: number;
  xlWidth?: number;
}

const BackgroundImage: React.FC<ImageProps> = ({ imageName, largeWidth, xlWidth }) => {
  return (
    <div
      className={`absolute right-0 hidden lg:block h-full lg:w-[${largeWidth}%] xl:w-[${xlWidth}%]`}
    >
      <Image
        src={`/images/${imageName}.png`}
        alt="Background"
        quality={100}
        fill={true}
        priority
      />
    </div>
  );
};

export default BackgroundImage;
