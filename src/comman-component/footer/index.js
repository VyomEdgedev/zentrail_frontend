import React from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const footerData = {
    brand: {
      name: "ZEN TRAIL",
      description:
        "Discover mood-based travel experiences designed for peace, romance, adventure, and healing. Wander with purpose. Travel with feeling.",
      logo: "/logo.png",
    },
    quickLinks1: [
      { label: "Number 1", url: "#" },
      { label: "Number 2", url: "#" },
      { label: "Number 3", url: "#" },
      { label: "Number 4", url: "#" },
      { label: "Number 5", url: "#" },
    ],
    quickLinks2: [
      { label: "Number 1", url: "#" },
      { label: "Number 2", url: "#" },
      { label: "Number 3", url: "#" },
      { label: "Number 4", url: "#" },
      { label: "Number 5", url: "#" },
    ],
    contactInfo: {
      phone: "+91 8287316546",
      email: "Giridharsharma2306@gmail.com",
    },
    bottomLinks: [
      { label: "Privacy Policies", url: "#" },
      { label: "Terms & Conditions", url: "#" },
      { label: "Disclaimer", url: "#" },
      { label: "Cookies", url: "#" },
    ],
    copyright: "© 2025 Zentrail.in",
    developedBy: "Developed by Vyomedge",
  };

  return (
    <footer className="bg-[#17361E] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-500 pb-8">
          <div>
            <Image
              src={footerData.brand.logo}
              alt="ZEN TRAIL Logo"
              width={64}
              height={64}
              className="rounded-full mb-3"
            />
            <div className="text-lg md:text-xl font-bold font-responsive">
              {footerData.brand.name}
            </div>
            <p className="mt-2 text-[16px] footer_commanText font-responsive">
              {footerData.brand.description}
            </p>
          </div>
          <div>
            <div className=" mb-2  text-[20px]  text-[(rgba(255, 255, 255, 1))]">{`  Quick Links`}</div>
            <ol className="list-decimal list-inside space-y-1 text-[16px] text-[(rgba(255, 255, 255, 1))]">
              {footerData.quickLinks1.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className=" text-[20px] mb-2 ">{` Quick Links`}</div>
            <ol className="list-decimal list-inside space-y-1 text-[16px] text-[(rgba(255, 255, 255, 1))]">
              {footerData.quickLinks2.map((link, i) => (
                <li key={i}>
                  <a href={link.url} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <div className=" mb-2 text-[20px] md:text-base font-responsive  ">
              {`Contact Info`}
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base font-responsive ">
              <FaWhatsapp /> {footerData.contactInfo.phone}
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base mt-1 font-responsive ">
              <MdEmail /> {footerData.contactInfo.email}
            </div>
            <div className="flex gap-3 mt-3 text-xl">
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
              <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
              <FaTwitter className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm md:text-base mt-6 space-y-2 md:space-y-0">
          <div className=" text-[16px] flex items-center gap-3 text-[rgba(232,248,225,1)]">
            <span>{footerData.copyright}</span>
            <span className="hidden md:inline">|</span>
            <span>{footerData.developedBy}</span>
            <Image
              src={"/icons/vyomedgelogo.png"}
              alt="ZEN TRAIL Logo"
              width={25}
              height={25}
              className="rounded-full "
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[rgba(232,248,225,1)]">
            {footerData.bottomLinks.map((link, i) => (
              <span key={i} className="flex items-center">
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
                {i < footerData.bottomLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
