import React from "react";
import Image from "next/image";
const Sec2 = () => {
  return (
    <div>
      <div className="bg-[#EBFEFF] md:h-[67vh] h-[62vh] w-full flex  justify-center items-center">
        <div className="flex flex-col justify-center items-center text-center ">
          <div>
            <h1 className="font-bold md:text-[73px] text-[64px] text-[#018DB0]">
              Skills
            </h1>
            <h3 className="text-black font-bold md:text-[48px] text-[32px] mb-12">
              What I am capable of?
            </h3>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex md:flex-row  justify-center items-center  gap-3">
              <Image
                src="/html.png"
                alt="js"
                width={100}
                height={100}
                className="md:w-[100px] md:h-[100px] w-[90px] h-[90px] transition-all duration-300 hover:scale-110 "
              />
              <Image
                src="/css.png"
                alt="canva"
                width={100}
                height={100}
                className="md:w-[120px] md:h-[120px] w-[100px] h-[100px] transition-all duration-300 hover:scale-110 "
              />
              <Image
                src="/js.png"
                alt="canva"
                width={100}
                height={100}
                className="md:w-[90px] md:h-[90px] w-[80px] h-[80px] transition-all duration-300 hover:scale-110 "
              />
            </div>
            <div className="ml-3 flex justify-center items-center gap-5">
              <Image
                src="/next.png"
                alt="next"
                width={100}
                height={100}
                className="md:w-[100px] md:h-[100px] w-[90px] h-[90px] transition-all duration-300 hover:scale-110 "
              />
              <Image
                src="/tailwind.png"
                alt="tailwind"
                width={100}
                height={100}
                className="md:w-[100px] md:h-[100px] w-[90px] h-[90px] transition-all duration-300 hover:scale-110 "
              />
              <Image
                src="/Canva.svg"
                alt="canva"
                width={100}
                height={100}
                className="md:w-[100px] md:h-[100px] w-[90px] h-[90px] transition-all duration-300 hover:scale-110 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
