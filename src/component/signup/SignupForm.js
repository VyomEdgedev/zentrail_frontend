import CustomButton from "@/comman-component/customButton";
import TextInput from "@/comman-component/TextInput";
import formStyle from "@/comman-component/TextInput/inputStyle";
import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const SignupForm = () => {
  return (
    <>
      <TextInput label="Name" placeholder="First + Last Name" required />
      <TextInput label="Email Address" type="email" placeholder="Your Email" />
      <TextInput
        label="Mobile Number"
        type="number"
        placeholder="For verification & updates"
      />
      <TextInput
        label="Password"
        type="number"
        placeholder="Min. 8 characters"
      />
      <TextInput
        label="Confirm Password"
        type="number"
        placeholder="Re-enter your password"
      />
      <FormControlLabel
        required
        control={
          <Checkbox
            sx={formStyle.checkbox}
          />
        }
        label="Agree to T&C"
        sx={formStyle.checkboxlabel}
      />
      <p className="dm_sans font-normal text-[14px] leading-[20px] bg-[#E2FFD5] p-2 rounded-[6px] text-center mb-[35px]">{`I agree to ZenTrail’s Terms & Privacy Policy`}</p>
      <CustomButton  type="submit" height="52px" width="162px">lets go</CustomButton>
    </>
  );
};

export default SignupForm;
