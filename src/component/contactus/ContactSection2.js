import Image from "next/image";
import React from "react";

const ContactSection2 = () => {
  return (
    <div className="custom-container py-10">
      <h3 className="responsiveheading2">{`Reach Us Anytime`}</h3>
      <p className="responsive-text text-[#1A2E33]">{`Feel free to connect with us!`}</p>
      <div className="grid grid-cols-12 gap-5 mt-4 md:mt-10">
        <div className=" col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-6">
          <div className="flex gap-4 my-2">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px">
              <Image src="/contact/contact2.png" width={100} height={100} quality={100} />
            </div>
            <div>
              <p className="responsive-text font-bold text-[#1A2E33]">{`Address`}</p>
              <p className="responsive-text text-[#4D5D60]">{`Plot No. 500, Kakrola Housing Complex, Dwarka Mor, Delhi – 110079`}</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
         <div className="flex gap-4 my-2">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
              <Image src="/contact/contact3.png" width={100} height={100} quality={100} />
            </div>
            <div>
              <p className="responsive-text font-bold text-[#1A2E33]">{`Call / WhatsApp`}</p>
              <p className="responsive-text text-[#4D5D60]">{`+91 8287316546`}</p>
            </div>
          </div></div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
         <div className="flex gap-4 my-2">
            <div className="shrink-0 relative w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]">
              <Image src="/contact/contact4.png" width={100} height={100} quality={100} />
            </div>
            <div>
              <p className="responsive-text font-bold text-[#1A2E33]">{`Email`}</p>
              <p className="responsive-text text-[#4D5D60]">{`info@zentrail.in`}</p>
            </div>
          </div></div>
      </div>
    </div>
  );
};

export default ContactSection2;
