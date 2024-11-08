import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: theme.palette.common.white,
    backgroundColor: "#2E2E2E",
    "& fieldset": {
      borderColor: theme.palette.common.white,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.common.white,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.common.white,
    },
    "& input::placeholder": {
      color: theme.palette.common.white,
    },
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.common.white,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: theme.palette.common.white,
  },
}));
