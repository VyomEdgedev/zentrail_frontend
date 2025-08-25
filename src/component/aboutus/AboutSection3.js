import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    image: "/about/about6.png",
    title: "Nature is not a luxury, it’s a necessity.",
  },
  {
    id: 2,
    image: "/about/about7.png",
    title: "Your mind matters more than your itinerary.",
  },
  {
    id: 3,
    image: "/about/about8.png",
    title: "Small groups and quiet spots beat noisy crowds.",
  },
  {
    id: 4,
    image: "/about/about9.png",
    title: "Your mind matters more than your itinerary.",
  },
];

const AboutSection3 = () => {
  return (
    <div className="custom-container items-center">
      <div className="grid  md:grid-col-1 lg:grid-cols-2 py-[45px] gap-[30px] lg:gap-[100px]">
        <div>
          <h3 className="responsiveheading2 text-center mt-4 lg:mt-10">
            {`Why We Do What We Do`}
          </h3>
          <div className="flex justify-center">
            <div className="flex-shrink-0 mt-1">
              <div className="w-[320px] md:w-[450px] h-[120px] md:h-[180px] relative mt-[20px] lg:mt-[70px]  ">
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
          {data?.map((val)=>  <div className="h-[170px] sm:h-[190px] md:h-[200px] lg:h-[200px]">
              <div key={val.id} className="w-[60px] h-[60px] md:w-[95px] md:h-[95px] relative my-[25px] mx-auto">
                <Image
                  src={val.image}
                  alt="about image"
                  fill
                  className="object-center"
                  quality={100}
                />
              </div>
              <p className="text-[#4D5D60] responsive-text text-center">
                {val.title}
              </p>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
