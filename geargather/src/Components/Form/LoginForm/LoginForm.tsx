import React, { useEffect } from "react";
import Button from "../../Button/Button";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import CssTextField from "../CSSTextField";
import LoginFormStyled from "./LoginForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction, loginResetState } from "../../../Store/Auth/login.store";
import LinearProgress from "@mui/material/LinearProgress";

const LogInForm = () => {
  ////////////////////////
  // declarations
  //////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginSuccess, error, loading } = useSelector((state: any) => {
    return state.login;
  });

  ////////////////////
  /// //functions
  ///////////////////////

  const onSubmit = (data: any) => {

    dispatch(loginAction(data));
  };

  useEffect(() => {
    if (loginSuccess) {
      navigate("/Dashboard", { replace: true });
      dispatch(loginResetState());
    }
  }, [loginSuccess, navigate, dispatch]);

  /////////////////////////7
  /// Return
  //////////

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && (
          <LinearProgress
            color="success"
            sx={{ width: "80%", margin: "0 auto" }}
          />
        )}
        <LoginFormStyled.Container>
          <CssTextField
            label="Email"
            id="custom-css-outlined-input"
            {...register("identifier", { required: true })}
            sx={{ zIndex: "3" }}
            variant="filled"
          />

          {errors.identifier && (
            <LoginFormStyled.ErrorSpan>
              This field is required
            </LoginFormStyled.ErrorSpan>
          )}
          <CssTextField
            label="Password"
            id="custom-css-outlined-password-input"
            {...register("password", { required: true, minLength: 4 })}
            sx={{ zIndex: "3" }}
            type="password"
            variant="filled"
          />
          {errors.password && (
            <LoginFormStyled.ErrorSpan>
              This field is required
            </LoginFormStyled.ErrorSpan>
          )}

          <Button label="Log in" type="submit" />
        </LoginFormStyled.Container>
        <LoginFormStyled.ErrorContainer>
          {error === "Request failed with status code 400" && (
            <LoginFormStyled.ErrorSpan>
              User not found
            </LoginFormStyled.ErrorSpan>
          )}
        </LoginFormStyled.ErrorContainer>
      </Box>
    </>
  );
};

export default LogInForm;
