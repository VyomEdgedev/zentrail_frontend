import Image from "next/image";
import React from "react";

const AboutSection3 = () => {
  return (
    <div className="custom-container items-center">
      <div className="grid  md:grid-col-1 lg:grid-cols-2 py-[45px] gap-[30px] lg:gap-[100px]">
        <div>
          <h3 className="dm_sans text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-center mt-4 lg:mt-10">
            {`Why We Do What We Do`}
          </h3>
          <div className="flex justify-center">
          <div className="flex-shrink-0 mt-1">
            <div className="w-[320px] md:w-[450px] h-[180px] relative mt-[20px] lg:mt-[70px]  ">
              <Image
                src="/about/about5.png"
                alt="about image"
                fill
                className="object-center"
                quality={100}
              />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-x-[40px]">
            <div className="h-[170px] sm:h-[190px] md:h-[200px] lg:h-[200px]">
              <div className="w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative my-[25px] mx-auto">
                <Image
                  src="/about/about6.png"
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] dm_sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px]">
                {`Nature is not a luxury, it’s a necessity.`}
              </p>
            </div>
            <div className="h-[170px] sm:h-[190px] md:h-[200px] lg:h-[200px]">
              <div className="w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative my-[25px] mx-auto">
                <Image
                  src="/about/about7.png"
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] dm_sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px]">{`Nature is not a luxury, it’s a necessity.`}</p>
            </div>
            <div className="h-[170px] sm:h-[190px] md:h-[200px] lg:h-[200px]">
              <div className="w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative my-[25px] mx-auto">
                <Image
                  src="/about/about8.png"
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] dm_sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px]">{`Nature is not a luxury, it’s a necessity.`}</p>
            </div>
            <div className="h-[170px] sm:h-[190px] md:h-[200px] lg:h-[200px]">
              <div className="w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative my-[25px] mx-auto">
                <Image
                  src="/about/about9.png"
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] dm_sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[28px]">{`Nature is not a luxury, it’s a necessity.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
