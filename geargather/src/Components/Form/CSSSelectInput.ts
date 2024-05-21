import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";

const CssSelectInput = styled(Select)({
  "& .MuiSelect-icon": {
    fill: "white",
  },

  "& .MuiFilledInput-root": {
    "&.MuiFilledInput-underline:after": {
      borderBottom: `none`,
    },
    "&.MuiFilledInput-underline": {
      borderBottom: `none`,
    },
    "&.MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "&.Mui-focused": {
      borderBottom: `1px solid white`,
    },
  },
});

export default CssSelectInput;
