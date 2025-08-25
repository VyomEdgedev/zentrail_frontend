import React from 'react'
import Image from 'next/image';

const PrivacyPolicy = () => {
    return (

        <div className="custom-container background-color: var(--color-white)">
            <p className="dm_sans responsive-text text-[#1A2E33] font-medium  mt-10   sm:mt-15 md:mt-23  mb-2 sm:mb-8 md:mb-10">{`Welcome to Zentrail. Your privacy is critically important to us, and we are committed to protecting the information you share with us. This Privacy Policy outlines what data we collect, how we use it, how we protect it, and your rights regarding your personal information.`}</p>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`1. Information We Collect`}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-2 ">{`We may collect the following information when you use our website or services:`}</p>
            <h3 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[44px] mb-2 ">{`Personal Information`}</h3>
            <ul className="list-disc px-5  font-medium text-[#1A2E33]  text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5 ">
                <li>Phone number</li>
                <li>Gender</li>
                <li>Date of birth</li>
                <li>ID proof details (if required for bookings)</li>
                <li>Emergency contact</li>
                <li>Address</li>
            </ul>
            <h3 className="dm_sans text-[#1A2E33] text-[24px] font-medium sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[44px]  mb-2">{`Technical Data`}</h3>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>Loction (via browser or app if consented)</li>
                <li>Access logs, cookies, and usage behavior</li>

            </ul>

            <h3 className="dm_sans text-[#1A2E33] text-[24px] font-medium sm:text-[26px] md:text-[28px] lg:text-[32px] leading-[44px] mb-2 ">{`Pyment Information`}</h3>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`We do not store any payment or card details. Payments are securely handled by trusted third-party payment gateways like Razorpay, PayU, etc.`}</p>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`2. How We Use Your Data `}</h2>
 <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`We use your data to:`}</p>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>Confirm and manage bookings</li>
                <li>Send you booking-related communications (email/WhatsApp/SMS)</li>
                <li>Personalize your experience</li>
                <li>Offer customer support</li>
                <li>Improve our website and offerings</li>
                <li>Send promotional content (only with your consent)</li>
                <li>Comply with legal obligations</li>
            </ul>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`3. Data Sharing & Disclosure `}</h2>
           <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`We do not sell or rent your personal data. We may share information with:`}</p>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>Trek partners or local guides (for logistic planning)</li>
                <li>Verified third-party tools for communication and analytics</li>
                <li>Law enforcement or regulators(only if legally required)</li>
            </ul>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`4. Data Storage & Security`}</h2>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>We use SSL encryption to protect data in transit.</li>
                <li>Your data is stored on secure servers.</li>
                <li>Access is strictly controlled internally.</li>
                <li>We regularly audit and monitor systems for vulnerabilities.</li>
            </ul>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`5. Cookies & Tracking Technologies `}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`We use cookies to:`}</p>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>Track user preferences</li>
                <li>Improve performance and navigation</li>
                <li>Serve relevant ads (with consent)</li>
            </ul>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`Users can disable cookies via browser settings. View our full Cookies & Consent Policy for details.`}</p>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`6. Your Rights `}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`You have the right to:`}</p>
            <ul className="list-disc px-5  text-[#1A2E33]  font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[24px] mb-5">
                <li>Access your data</li>
                <li>Update or correct your data </li>
                <li>Request data deletion</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with a data authority (if applicable)</li>
            </ul>
           <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`You can manage your privacy preferences anytime through your profile or by contacting us.`}</p>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`7. Children’s Privacy `}</h2>
             <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`Zentrail does not knowingly collect personal data from individuals under 13 years without verified parental consent.`}</p>
            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`8. Changes to This Policy `}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`We may update this Privacy Policy from time to time. The “Last Updated” date will reflect any changes. We recommend reviewing it periodically.`}</p>

            <h2 className="dm_sans text-[#1A2E33] font-medium text-[24px] sm:text-[30px] md:text-[38px] lg:text-[42px] leading-[100px]">{`9. Contact Us `}</h2>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`If you have questions about this Privacy Policy, feel free to reach out at:`}</p>
            <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`📩  Email: info@zentrail.in`}</p>
           <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`📞  Phone: +91-8287316546`}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-5 md:gap-20 mt-8 items-start">
                <div className=" flex items-center-safe gap-5">
                    <Image
                       // className="absolute top-0 left-0 "
                        src="/calender.svg"
                        alt="calender"
                        width={70}
                        height={70}

                    />
                    <p className="responsive-text text-[#1A2E33]  font-medium  mb-8 ">{`Last Updated: [Insert Date]`}</p>
                </div>
                <div className="justify-items-center  sm:justify-items-end   sm:w-full mb-14">
                    <Image
                        src="/logo.png"
                        alt="Policylogo"
                        width={155}
                        height={180}
                    />
                </div>
            </div>
        </div>
         
        )   
}
             
 export default  PrivacyPolicy;