import React from "react";
import classess from "./about.module.css";
import Image from "next/image";

const AboutSection2 = () => {
  return (
    <div className={classess.aboutbg}>
      <div className="custom-container">
        <h2 className="dm_sans text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]  font-medium text-center">{`What Is ZenTrail?`}</h2>
        <p className="text-[#1A2E33] dm_sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-center font-medium leading-[24px] mt-1 ">{`ZenTrail isn’t your regular travel agency.`}</p>
        <div className="grid  sm:grid-col-1 md:grid-cols-2 py-[45px] gap-[30px]">
          <div className="bg-white  p-[16px] rounded-[6px]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-15 h-15 flex items-center justify-center">
                  <Image
                    src="/about/about4.png"
                    alt="about image"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
              </div>
              <div>
                <h2 className="dm_sans text-[#1A2E33] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[24px]">
                  {`A Mission Founded in Peace`}
                </h2>
                <p className="text-[#4D5D60] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[24px] mt-1">
                  {`To help people discover places where nature heals, and silence
                          speaks.`}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white  p-[16px] rounded-[6px]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-15 h-15 flex items-center justify-center">
                  <Image
                    src="/about/about3.png"
                    alt="about image"
                    height={100}
                    width={100}
                    quality={100}
                  />
                </div>
              </div>
              <div>
                <h2 className="dm_sans text-[#1A2E33] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[24px]">
                  {`Soulful Getaways`}
                </h2>
                <p className="text-[#4D5D60] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[24px] mt-1">
                  {`From hidden Himalayan villages to forest retreats, from spiritual walks to eco-conscious slow travel, we take you places that make you feel found.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
