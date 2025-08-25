import Banner from "@/comman-component/banner";
import CustomButton from "@/comman-component/customButton";
import SEO from "@/comman-component/Seo";
import dynamic from "next/dynamic";

// Lazy load sections
const AboutSection2 = dynamic(() =>
  import("@/component/aboutus/AboutSection2")
);
const AboutSection3 = dynamic(() =>
  import("@/component/aboutus/AboutSection3")
);
const AboutSection4 = dynamic(() =>
  import("@/component/aboutus/AboutSection4")
);
const HeroSectionAbout = dynamic(() =>
  import("@/component/aboutus/HeroSectionAbout")
);
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const AboutUs = () => {
  return (
    <>
      <SEO
        // url="http://localhost:3000/aboutus"
        metaTitle="Create Your ZenTrail Account and Let’s begin your travel story"
        metaDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of        peace, thrill, or just something new — we help you discover destinations that match your mood.
            Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        keywords="Welcome to ZenTrai"
        // canonical="http://localhost:3000/aboutus"
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
      <Banner bgImage="/about/aboutbanner.png" title="The Story Behind ZenTrail" description="Where Peaceful Journeys Begin with a Real Dreamer" button={<CustomButton>Discover Our Journeys</CustomButton>}/>
      <HeroSectionAbout />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </>
  );
};

export default AboutUs;
