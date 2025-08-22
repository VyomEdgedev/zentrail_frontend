import CustomButton from '@/comman-component/customButton'
import CustomButton2 from '@/comman-component/customButton2'
import TextInput from '@/comman-component/TextInput'
import React from 'react'
import formStyle from '@/comman-component/TextInput/inputStyle'
import buttonStyle from '@/comman-component/customButton/buttonStyle'

const ForgetForm = () => {
  return (
    <div className="py-14 h-[100vh]">
        <div className="custom-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[60px] items-center">
                <div>
                    <h1 className="dm_sans font-bold text-[24px] sm:text-[26px] md:text-[32px] lg:text-[40px]">
                        {`Reset Password`}
                    </h1>
                    <p className="text-base dm_sans  mt-1 sm:mt-2 md:mt-3 lg:mt-6  ">
                       {` Please enter your email to receive the reset instructions.`}
                    </p> 
                </div>
                <div>
                    <TextInput
                    sx={formStyle.fieldstyle}
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        required
                    />
                    <p className='text-xs dm_sans text-[#00000080] mt-1'>{`We'll send you a link to reset your password.`}</p>
                    <div className="flex flex-wrap gap-3 md:gap-2 sm:gap-2 mt-10">
                        <div>
                            <CustomButton2 variant="outlined" color="#000000" sx={buttonStyle.forgetButton} >
                                Cancel
                            </CustomButton2>
                            </div>
                            <div>
                            <CustomButton  type="submit" sx={buttonStyle.forgetButton} >
                               Send Reset Link
                            </CustomButton>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgetForm