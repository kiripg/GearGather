import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const CssTextField = styled(TextField)({
  "& .MuiInputLabel-filled": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: "white !important",
  },

  "& .MuiInputBase-input": {
    color: "white",
  },

  "& .MuiFilledInput-root": {
    "&.MuiFilledInput-underline": {
      borderBottom: `none`,
    },

    "&.Mui-focused": {
      borderBottom: `3px solid #53DD6C`,
    },
    "& .MuiSvgIcon-root": {
      fill: "white !important",
    },
  },

  "& .MuiFilledInput-root:after": {
    borderBottom: "none",
  },
});

export default CssTextField;
