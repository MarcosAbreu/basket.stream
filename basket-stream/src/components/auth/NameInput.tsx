import { SingleFormInput } from "@/lib/definitions";
import { StyledTextField } from "../common/StyledTextField";

export default function NameInput({ register, errors }: SingleFormInput) {
  return (
    <StyledTextField
      label="Name *"
      variant="outlined"
      placeholder="Hayman Andrews"
      {...register("username")}
      error={Boolean(errors.username)}
      helperText={errors.username && errors.username.message}
    />
  );
}
