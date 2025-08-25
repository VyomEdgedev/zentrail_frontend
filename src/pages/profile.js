import CustomBanner1 from "@/comman-component/customBanner1";
import SEO from "@/comman-component/Seo";
import ProfileSection1 from "@/component/profiles/profile/ProfileSection1";
import React from "react";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const profile = () => {
  return (
    <>
      <SEO
        // url="http://localhost:3000/profile"
        metaTitle="Create Your ZenTrail Account and Let’s begin your travel story"
        metaDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of        peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        keywords="Welcome to ZenTrai"
        // canonical="http://localhost:3000/profile"
        ogTitle="Create Your ZenTrail Account and Let’s begin your travel story"
        ogDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        ogImage={`${SITE_URL}/og-image.jpg`}
        twitterTitle="Create Your ZenTrail Account and Let’s begin your travel story"
        twitterDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of peace, thrill, or just something new — we help you discover destinations that match your mood.
        Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        twitterImage={`${SITE_URL}/logoo.jpg`}
        robots="index, follow"
      />
      <CustomBanner1
        title="Your ZenTrail Profile"
        description="Personalize your travel experience with accurate profile details."
      />
      <ProfileSection1/>
    </>
  );
};

export default profile;
