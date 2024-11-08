"use client";
import { useRegisterUser } from "@/hooks/auth/useRegisterUser";
import { SignUpFormData } from "@/lib/definitions";

import { Backdrop, Box } from "@mui/material";
import Loading from "@/components/common/Loading";

import EmailInput from "./EmailInput";
import SecondaryActionButton from "../common/SecondaryActionButton";
import ActionButton from "../common/ActionButton";
import AuthPopup from "./AuthPopup";
import TitleAndSubtitle from "./TitleAndSubtitle";
import NameInput from "./NameInput";
import ConfirmPasswordInput from "./ConfirmPasswordInput";
import PasswordInput from "./PasswordInput";
import { useSignupForm } from "@/lib/schemas/signUpSchema";

const SignupForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useSignupForm();

  const { mutate, setOpenDialog, openDialog, message, isPending } = useRegisterUser();

  const submitData = (data: SignUpFormData) => {
    mutate(data);
  };

  return (
    <>
      <Backdrop open={isPending} sx={{ zIndex: 99 }}>
        <Loading color="common.white" circularColor="secondary.main" />
      </Backdrop>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "common.black",
          height: "100vh",
          justifyContent: "center",
          p: { xs: "60px 40px", md: "0 200px" },
        }}
      >
        <TitleAndSubtitle
          title="Create an account"
          subtitle="Create an account to get an easy access to your dream shopping"
        />
        <Box sx={{ width: { md: "436px", xs: "300px", sm: "320px" } }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            onSubmit={handleSubmit(submitData)}
          >
            <NameInput register={register} errors={errors} />
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <ConfirmPasswordInput register={register} errors={errors} />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                mt: { xs: "35px", md: "90px" },
              }}
            >
              <ActionButton isLoading={isPending} text={"Sign up"} />
              <SecondaryActionButton
                text={"Already have an account? "}
                btnText={"Sign in"}
                goto={"/auth/sign-in"}
              />
            </Box>
          </form>
        </Box>
      </Box>
      <AuthPopup
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title="Sign up info"
        btnText1={message.includes("successfully") ? "Ok" : "Try again"}
        goto1={message.includes("successfully") ? "/auth/sign-in" : ""}
        goto2="/auth/sign-in"
        btnText2={message.includes("successfully") ? "" : "Go to sign in"}
        message={message}
      />
    </>
  );
};

export default SignupForm;
