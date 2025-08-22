import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <nav className="w-full bg-white shadow-sm">
        <div className="custom-container flex items-center justify-between px-2 py-1">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 sm:w-13 md:w-13 lg:w-15 relative">
              <Image
                src="/zantraillogo.png"
                alt="Zen Trail"
                layout="responsive"
                width={100}
                height={100}
                quality={100}
              />
            </div>
            <span className="text-base text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] mt-1 font-bold">
              ZEN TRAIL
            </span>
          </div>

          <div className=" hidden md:flex  md:gap-[20px] lg:gap-[65px] items-center text-center">
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
            <Link href={"/signup"} className="bg-sky-400 hover:bg-sky-500 text-white rounded-[12px] px-5 py-2 text-sm font-medium">
              {` Your Trail`}
            </Link>
            <div className="md:hidden">
              <IconButton onClick={() => setIsOpen(true)}>
                <MdOutlineMenu />
              </IconButton>
            </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 z-40 
               bg-gradient-to-br from-black/60 via-black/40 to-transparent"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <IconButton onClick={() => setIsOpen(false)}>
                <MdClose />
              </IconButton>
            </div>
            <div className="flex flex-col items-start px-6 gap-6 mt-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  // href={item.link}
                  className="flex items-center gap-3 text-lg font-medium"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  <Image
                    width={24}
                    height={24}
                    src={item.icon}
                    alt={item.label}
                  />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
