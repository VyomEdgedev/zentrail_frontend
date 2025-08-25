import Image from 'next/image'
import React from 'react'

const ContactSection1 = () => {
  return (
    <div className='custom-container'>
        <div className='block sm:grid grid-cols-12 items-center pt-5 pb-10'>
            <div className='col-span-7 pr-0 md:pr-10 py-7 sm:py-0'>
                <h2 className='responsiveheading2'>{`We’re Just a Message Away-  Let’s Make Your Journey Real`}</h2>
                <p className='responsive-text text-[#4D5D60] mt-2 mb-6'>{`Planning your next escape? Got questions about a trail? Or just dreaming of mountains, forests, or silent sunrises?`}</p>
                <p className='responsive-text text-[#4D5D60]'>{`At ZenTrail, we’re not just here to take you places —`}</p>
                <p className='responsive-text text-[#4D5D60]'>{`We’re here to guide your mood-based, offbeat journey through India. No bots. No noise. Just real people who love nature as much as you do.`}</p>
            </div>
            <div className='col-span-5 flex justify-center'>
                <Image src="/contact/contact1.png" height={410} width={275} quality={100}/>
            </div>
        </div>
    </div>
  )
}

export default ContactSection1