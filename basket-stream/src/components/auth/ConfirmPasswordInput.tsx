import { useShowPassword } from "@/hooks/common/useShowPassword";
import { SingleFormInput } from "@/lib/definitions";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { StyledTextField } from "../common/StyledTextField";

export default function ConfirmPasswordInput({ register, errors }: SingleFormInput) {
  const { handleClickShowConfirmPassword, showConfirmPassword } = useShowPassword();

  return (
    <StyledTextField
      type={showConfirmPassword ? "text" : "password"}
      label="Confirm Password *"
      variant="outlined"
      placeholder="at least 8 characters"
      {...register("confirmPassword")}
      error={Boolean(errors.confirmPassword)}
      helperText={errors.confirmPassword && errors.confirmPassword.message}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              edge="end"
            >
              {showConfirmPassword ? (
                <Visibility sx={{ fill: "#ffffff" }} />
              ) : (
                <VisibilityOff sx={{ fill: "#ffffff" }} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
