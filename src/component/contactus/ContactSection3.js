import Image from "next/image";
import React from "react";
import CustomButton from "@/comman-component/customButton";

const ContactSection3 = () => {
  const data = [
    {
      id: 1,
      image: "/contact/contact5.png",
      title: "instagram",
    },
    {
      id: 2,
      image: "/contact/contact6.png",
      title: "instagram",
    },
    {
      id: 3,
      image: "/contact/contact7.png",
      title: "instagram",
    },
    {
      id: 4,
      image: "/contact/contact8.png",
      title: "instagram",
    },
  ];

  return (
    <>
      <div className="bg-[#DEF2FCBD]">
        <div className="custom-container py-10">
          <p className="responsive-text text-center sm:text-left">{`Follow us for travel tips, soulful destinations, and real stories: `}</p>
          <div className="block sm:grid grid-cols-2 items-center pt-8 pb-10 gap-1 sm:gap-10 md:gap-10 lg:gap-40 xl:gap-80">
            <div className="grid grid-cols-2 gap-10">
              {data?.map((val) => (
                <div className="flex flex-col items-center">
                  <Image src={val.image} height={55} width={55} />
                  <p className="responsive-text mt-4">{val.title}</p>
                </div>
              ))}
            </div>
            <div className="">
              <h3 className="responsiveheading2 text-center sm:text-left mt-10 sm:mt-0">
                {`Follow Our Trails, Feel the Journey`}
              </h3>
              <p className="responsive-text text-center mt-2 sm:text-left">{`Stay close to nature, even on your screen.`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container py-10">
        <h3 className="responsiveheading2">{`Let’s Discover Where Your Mood Wants to Go`}</h3>
        <p className="responsive-text mt-2 mb-5">{`Not sure where to begin? Just tell us how you fee l, and we’ll suggest the perfect trail — quiet forests, healing retreats, or hidden Himalayan gems .`}</p>
        <CustomButton width={300}>{`Start Planning My ZenTrail`}</CustomButton>
      </div>
    </>
  );
};

export default ContactSection3;
