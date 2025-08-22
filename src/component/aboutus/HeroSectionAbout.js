import Image from "next/image";
import React from "react";

const HeroSectionAbout = () => {
  return (
    <div className="custom-container p-8">
      <div className="grid grid-cols-12 gap-[20px] items-start">
        <div className="item-center col-span-12 md:col-span-7 ">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="dm_sans text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]  font-medium lg:leading-[58px]">
              {`Meet the Mind Behind the Mood`}
              <span className="text-[#37863F]">{`-Girdhar Sharma`}</span>
            </h2>
            <p className="text-[#4D5D60] dm_sans text-[16px] font-normal leading-[24px] mt-2 lg:mt-4">
              {`Some people start a travel company for profit. Girdhar Sharma
              started ZenTrail because he once got lost in the right direction.`}
            </p>
          </div>

          <div className="mb-8 border-1 border-[#DEF2FC] p-[16px] lg:mr-[100px] rounded-[6px]">
            <div className="flex items-start gap-4">
             
              <div>
                <h2 className="dm_sans text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[32px]">
                  {`A Mission Founded in Peace`}
                </h2>
                <p className="text-[#4D5D60] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]  font-medium leading-[24px] mt-3">
                  {`To help people discover places where nature heals, and silence
                  speaks.`}
                </p>
              </div>
               <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src="/about/about2.png" alt="about image" height={100} width={100} quality={100}/>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8 border-1 border-[#DEF2FC] p-[16px] lg:mr-[100px] rounded-[6px]">
            <div className="flex items-start gap-4">
             
              <div>
                <h2 className="dm_sans text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[32px]">
                  {`The Journey Begins`}
                </h2>
                <p className="text-[#4D5D60] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]  font-medium leading-[24px] mt-3">
                  {`It began with a quiet trek in the Himalayas. No cell signals. No checklists. Just stillness. That’s when Girdhar felt it, the world was too noisy, and people needed a different way to travel.`}
                </p>
              </div>
               <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src="/about/about1.png" alt="about image" height={100} width={100} quality={100}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-lg ">
            <img
              src="/about/owner.png"
              alt="Motorcycle rider in mountain landscape with adventure bike"
              className="w-full h-[500px] sm:h-[900px] md:h-[650px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
