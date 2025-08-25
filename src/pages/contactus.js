import Banner from "@/comman-component/banner";
import CustomButton from "@/comman-component/customButton";
import SEO from "@/comman-component/Seo";
import ContactForm from "@/component/contactus/ContactForm";
import ContactSection1 from "@/component/contactus/ContactSection1";
import ContactSection2 from "@/component/contactus/ContactSection2";
import ContactSection3 from "@/component/contactus/ContactSection3";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

const AboutUs = () => {
  return (
    <>
      <SEO
        url="http://localhost:3000/contactus"
        metaTitle="Create Your ZenTrail Account and Let’s begin your travel story"
        metaDescription="Welcome to ZenTrail — where every journey begins with a feeling. Whether you're in search of        peace, thrill, or just something new — we help you discover destinations that match your mood.
            Just sign up in a few simple steps and unlock a world of authentic, unexplored trails."
        keywords="Welcome to ZenTrai"
        canonical="http://localhost:3000/contactus"
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
      <Banner
        bgImage="/contact/contactbanner.png"
        title="Let’s Start Your Trail to Peace, Nature & Discovery"
      />
      <ContactSection1/>
      <ContactForm/>
      <ContactSection2/>
      <ContactSection3/>
    </>
  );
};

export default AboutUs;
