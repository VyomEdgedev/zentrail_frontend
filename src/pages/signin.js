import CustomBanner1 from "@/comman-component/customBanner1";
import CustomButton from "@/comman-component/customButton";
import CustomButton2 from "@/comman-component/customButton2";
import TextInput from "@/comman-component/TextInput";
import Link from "next/link";
import React from "react";

const signin = () => {
  return (
    <div className="bg-[#DEF2FC] flex py-12 h-[90vh] align-middle items-center">
      <div className="custom-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h1 className="dm_sans font-medium text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[30px]">
              {`Log In`}
            </h1>
            <p className="responsive-text text-[#4D5D60] mt-4">
              {`Log in to view your trips, manage bookings, and access exclusive
              member perks.`}
            </p>
          </div>
          <div>
            <TextInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              required
            />
            <TextInput
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="flex gap-1 flex-wrap">
              <div className="flex-1">
                <CustomButton2 variant="outlined" color="#000000" width={"100%"} height="48px">
                  {`Forgot Password?`}
                </CustomButton2>
              </div>
            
              <div className="flex-1">
                <Link href="signup">
                    <CustomButton className="flex-1" width={"100%"} color="#000000" height="48px">
                  {`Sign Up`}
                </CustomButton>
                </Link>
              </div>
                <div className="flex-1">
                <CustomButton className="flex-1" width={"100%"} color="#000000" height="48px">
                  {`Login`}
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

signin.layout = "layout1";

export default signin;
