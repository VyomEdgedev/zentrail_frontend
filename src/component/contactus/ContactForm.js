import CustomButton from '@/comman-component/customButton'
import TextInput from '@/comman-component/TextInput'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#DEF2FCBD] py-10'>
        <div className='custom-container'>
            <h2 className='responsiveheading2 text-center'>{`Drop Us a Message`}</h2>
            <p className='responsive-text text-center text-[#4D5D60] mt-2 mb-6'>{`We usually reply within 24 hours (faster on WhatsApp).`}</p>

            <div className='sm:grid grid-cols-2 gap-x-5'>
                <div className=''>
                    <TextInput label="Full Name" placeholder="Enter your full name" required />
                    <TextInput label="Mobile Number" placeholder="Enter your mobile number" required />
                    <TextInput label="Travel Month" placeholder="Month (Optional)" required />
                    <TextInput label="Number of Travelers" placeholder="Enter number of travelers" required />
                   
                </div>
                 <div className=''>
                    <TextInput label="Email Address" placeholder="Enter your email" required />
                     <div>
                        <label>Preferred Contact Method</label>
                    </div>
                </div>
                <div className='col-span-2 text-center'>
                    <CustomButton width={300}>Send Message</CustomButton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm