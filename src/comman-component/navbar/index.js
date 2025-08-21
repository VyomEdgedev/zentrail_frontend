import Image from "next/image";
import React from "react";

export default function Navbar() {
  const menuItems = [
    {
      label: "About Us",
      icon: "/icons/about.png",
      link: "/about",
    },
    {
      label: "Category",
      icon: "/icons/category.png",
      link: "/category",
    },
    {
      label: "Resources",
      icon: "/icons/resources.png",
      link: "/resources",
    },
    {
      label: "Contact",
      icon: "/icons/contact.png",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-1">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/zantraillogo.png"
              alt="Zen Trail"
              className="w-15 h-15"
              width={100}
              height={100}
              quality={100}
            />
            <span className=" text-[20px] mt-[5x] font-bold">{`ZEN TRAIL`}</span>
          </div>
          <div className=" hidden md:flex gap-[65px] items-center text-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="flex flex-col items-center  text-[18px]"
              >
                <Image
                  width={24}
                  height={24}
                  src={item.icon}
                  alt={item.label}
                  className="w-[35px] h-[35px] mb-0.5"
                />
                <span className="commonText">{item.label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <img src="/icons/whatsup.png" alt="WhatsApp" className="w-7 h-7" />
            <button className="bg-sky-400 hover:bg-sky-500 text-white rounded-full px-5 py-2 text-sm font-medium">
             {` Your Trail`}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
