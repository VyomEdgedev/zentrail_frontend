import CustomBanner1 from '@/comman-component/customBanner1'
import ForgetForm from '@/component/forgetpassword/ForgetForm'
import ForgetHero from '@/component/forgetpassword/ForgetHero'
import React from 'react'

const forgetpassword = () => {
  return (
    <>
    <CustomBanner1 title={"Trouble Logging In?"}
    description={"Let's get you back on travel trail."}/>
    <ForgetHero/>
    <ForgetForm/>
    </>
  )
}

export default forgetpassword