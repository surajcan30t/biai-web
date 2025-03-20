import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[25rem] rounded-full bg-conic-180  from-indigo-950  to-[#3d0064] blur-3xl"></div>
        <div className="absolute left-1/2 top-1/4 lg:left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] text-9xl rounded-full bg-gradient-to-br from-violet-400 to-teal-200 text-black flex justify-center items-center">
          <Image src="/BIAILogo.png" width={200} height={200} alt="biai" />
        </div>
        <div className="absolute bottom-1/5 md:bottom-1/3 flex justify-center items-center text-5xl lg:text-8xl text-center font-[family-name:var(--font-saira)] font-bold">
          Empowering Industries with Next-Gen AI & Emerging Technologies
        </div>
        <div className="absolute w-full bottom-1/12 md:bottom-1/5 flex justify-center items-center text-2xl md:text-5xl font-extrabold text-center">
          Transforming Innovation into Intelligence
        </div>
      </div>
    </>
  );
};

export default Hero;
