import CustomButton from "@/comman-component/customButton";
import buttonStyle from "@/comman-component/customButton/buttonStyle";
import CustomButton2 from "@/comman-component/customButton2";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#DEF2FC]">
      <div className=" custom-container py-20">
    
        <div className="flex flex-col items-center justify-center text-center">
        <div className=" w-[738px] h-[214px] mt-20 relative">
  <Image
    src="/404image.png"
    alt="404image"
    fill
    
  />
</div>
          <div className="mt-10 dm_sans ">
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
          <div className="flex flex-wrap justify-center sm:justify-normal gap-1 md:gap-2 sm:gap-2 mt-2.5">
            <div className="manrope">
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
