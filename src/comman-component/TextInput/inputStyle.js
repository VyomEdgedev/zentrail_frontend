const formStyle = {
  input: {
    backgroundColor: "white",
    borderRadius: "6px",
    "& fieldset": { border: "none" }, // removes border
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
    marginBottom: "30px",
  },
  checkbox: {
    color: "green", // unchecked color
    "&.Mui-checked": {
      color: "green", // checked color
    },
    "& .MuiSvgIcon-root": {
      borderRadius: "12px", // rounded corners
      fontSize: 28, // bigger checkbox
    },
  },
  checkboxlabel: {
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight:"20px",
      color: "#000000",
      fontFamily: "DM Sans"
    },
  },
};

export default formStyle;
