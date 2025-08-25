import CustomButton from "@/comman-component/customButton";
import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#DEF2FC]">
      <div className=" custom-container py-10 sm:py-15  md:py-20">
        <div className="flex flex-col items-center justify-center text-center gap-5 sm:gap-10">
          <div className=" relative mt-2 sm:mt-16 md:mt-20 w-full sm:w-[500px] md:w-[738px] h-[150px] sm:h-[180px] md:h-[214px] mx-auto">
            <Image
              src="/404image.png"
              alt="404image"
              fill
              className="object-contain"
            />
          </div>
          <div className=" dm_sans ">
            <h1 className="responsive-heading text-[#1A2E33]">
              <span className="font-bold ">{`Oops !`}</span>{" "}
              {`Lost in the Trails?`}
            </h1>
            <h4 className="responsive-h4 text-[#4D5D60] font-medium ">
              {`This page took a wrong turn and doesn’t exist.`}
            </h4>
            <h6 className="responsive-text mt-2 md:mt-5.5 text-[#4D5D60]">
              {`But don’t worry — your next adventure is just a click away.`}
            </h6>
          </div>
          <div className="flex flex-wrap justify-center md:justify-normal  gap-1 sm:gap-2 py-1 sm:py-1.5 md:py-2.5">
            <div>
              <CustomButton sx={buttonStyle.notfoundButton}>
                Back to Home
              </CustomButton>
            </div>
            <div>
              <CustomButton2 sx={buttonStyle.notfoundButton1}>
                Explore Tour Packages
              </CustomButton2>
            </div>
            <div>
              <CustomButton2 sx={buttonStyle.notfoundButton2}>
                Contact Support
              </CustomButton2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
