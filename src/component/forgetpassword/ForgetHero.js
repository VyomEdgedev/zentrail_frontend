import React from 'react'
import Image from 'next/image'

const ForgetHero = () => {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-5 md:gap-20 items-center   mt-8">
        <div >
          <h4 className=" extraSmall dm_sans font-medium text-[22px] sm:text-[24px] md:text-[27px] lg:text-[32px]  text-[#1A2E33] leading-[30px] mb-3 sm:mb-5">
            {`No worries — it happens.`}
          </h4>
          <h6 className="dm_sans font-medium text-[15px] sm:text-[18px] md:text-[20px] lg:text-[20px]  text-[#4D5D60] leading-6">
            {`Enter your email address or mobile number linked with your ZenTrail account, and we’ll send you a secure link to reset your password.`}
          </h6>
        </div>

        <div className="justify-items-center  sm:justify-items-end   sm:w-full">
          <Image
            src="/forgetHero.png"
            alt="forgetHero"
            //className=" object-fit: contain"
            width={442}
            height={375}
          />
        </div>

      </div>
    </div>
  )
}

export default ForgetHero