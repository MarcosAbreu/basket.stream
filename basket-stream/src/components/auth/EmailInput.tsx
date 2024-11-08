import { SingleFormInput } from "@/lib/definitions";
import { StyledTextField } from "../common/StyledTextField";

export default function EmailInput({ register, errors }: SingleFormInput) {
  return (
    <StyledTextField
      label="Email *"
      variant="outlined"
      placeholder="example@mail.com"
      {...register("email")}
      error={Boolean(errors.email)}
      helperText={errors.email && errors.email.message}
    />
  );
}
