"use client";
import { Box, Backdrop } from "@mui/material";
import { useSignInForm } from "@/lib/schemas/authSchemas";
import { SignInFormInputs } from "@/lib/definitions";
import { useSignIn } from "@/hooks/auth/useSignIn";
import Loading from "../common/Loading";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import RememberMeInput from "./RememberMeInput";
import ActionButton from "../common/ActionButton";
import SecondaryActionButton from "../common/SecondaryActionButton";
import AuthPopup from "./AuthPopup";
import TitleAndSubtitle from "./TitleAndSubtitle";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm();

  const { handleSignIn, openDialog, closeDialog, message, isLoading } = useSignIn();

  const submitData = async (data: SignInFormInputs) => {
    await handleSignIn(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "common.black",
        textAlign: { xs: "center", sm: "none" },
        justifyContent: "center",
        height: "100vh",
        p: { xs: "0 30px", md: "0 200px" },
      }}
    >
      <Backdrop open={isLoading} sx={{ zIndex: 99 }}>
        <Loading color="common.white" circularColor="secondary.main" />
      </Backdrop>
      <TitleAndSubtitle
        title="Welcome back"
        subtitle="Welcome back! Please enter your details to log into your account."
      />
      <Box sx={{ width: { md: "436px", xs: "300px", sm: "320px" } }}>
        <form
          onSubmit={handleSubmit(submitData)}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <RememberMeInput register={register} />
            <SecondaryActionButton btnText="Forgot password?" goto="/auth/forgot-password" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              mt: { xs: "45px", md: "90px" },
            }}
          >
            <ActionButton text="Sign in" isLoading={isLoading} />
            <SecondaryActionButton
              text="Don't have an account? "
              btnText="Sign up"
              goto="/auth/sign-up"
            />
          </Box>
        </form>
      </Box>
      <AuthPopup
        openDialog={openDialog}
        setOpenDialog={closeDialog}
        title="Sign in error"
        message={message}
        btnText1={message.includes("Invalid") ? "Try again" : "Ok"}
      />
    </Box>
  );
};

export default SignInForm;
