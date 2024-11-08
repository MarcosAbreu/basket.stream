import { SignInFormInputs } from "@/lib/definitions";
import { Checkbox, FormControlLabel } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<SignInFormInputs>;
};

export default function RememberMeInput({ register }: Props) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...register("rememberMe")}
          color="primary"
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: "16px",
              color: "#ffffff",
              borderRadius: "4px",
            },
            "&:hover .MuiSvgIcon-root": {
              backgroundColor: "transparent",
            },
            "&.Mui-checked .MuiSvgIcon-root": {
              color: "primary.main",
            },
          }}
        />
      }
      label="Remember me"
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "16px",
          ml: "-6px",
        },
      }}
    />
  );
}
