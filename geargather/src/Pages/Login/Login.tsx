import React from "react";
import Header from "../../Components/Header/header";
import LoginStyled from "./Login.styled";
import Footer from "./../../Components/Footer/Footer";
import LogInForm from "../../Components/Form/LoginForm/LoginForm";

const Login = () => {
  /////////////////////////7
  /// Return
  //////////
  return (
    <>
      <LoginStyled.All>
        <Header label="Log in" />
        <LoginStyled.Container>
          <LoginStyled.TitleContainer>
            <LoginStyled.Title>
              Are you ready to{" "}
              <LoginStyled.TitleHighlight>Log In</LoginStyled.TitleHighlight> ?
            </LoginStyled.Title>
          </LoginStyled.TitleContainer>

          <LogInForm />
        </LoginStyled.Container>
        <Footer />
      </LoginStyled.All>
    </>
  );
};

export default Login;
