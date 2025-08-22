import CustomBanner1 from "@/comman-component/customBanner1";
import SEO from "@/comman-component/Seo";
import SignupForm from "@/component/signup/SignupForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const signup = () => {
  return (
    <>
      <SEO
        url="http://www.poornamevents.com/about-us"
        metaTitle="Let’s begin your travel story"
        metaDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of        peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        keywords="wedding planner in MP, about Poornam Events"
        canonical="http://www.poornamevents.com/about-us"
        ogTitle="Let’s begin your travel story"
        ogDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Let’s begin your travel story"
        twitterDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <CustomBanner1
        title="Create Your ZenTrail Account"
        description="Your journey to offbeat, soulful travel starts here."
      />
      <div className="custom-container py-10">
        <p className="dm_sans font-medium text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[30px]">{`Let’s begin your travel story.`}</p>
        <p className="responsive-text text-[#4D5D60] mt-6">{`Welcome to ZenTrail -where every journey begins with
                    a feeling. Whether you're in search of peace, thrill, or just something new-we help you discover destinations that match your mood.`}</p>
        <p className="responsive-text text-[#4D5D60] mt-4">{`Just sign up in a few simple steps and unlock a world of authentic, unexplored trails.`}</p>
      </div>
      <div className="bg-[#E8F8E1] py-8">
        <div className="custom-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="order-2 sm:order-1">
              <SignupForm />
              <p className="dm_sans font-medium text-[16px] leading-[25px] mt-2 text-slate-700">Already have an Account? <Link href="signin"><u>SignIn</u></Link></p>
            </div>
            <div className="order-1 sm:order-2 py-4">
              <h2 className="dm_sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">
                {`Let’s begin your travel story.`}
              </h2>
              <p className="responsive-text text-[#4D5D60] mt-4">
                {`Sign up in a few simple steps to unlock a world of authentic,
                unexplored trails.`}
              </p>

              {/* Image responsive scaling */}
              <div className="flex justify-center">
                <Image
                  src="/signup.svg"
                  alt="Signup Illustration"
                  className="mt-8 w-full max-w-md lg:max-w-xl"
                  width={510}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signup;
