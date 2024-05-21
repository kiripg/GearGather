import styled from "@emotion/styled";
import logo from "./../../../assets/image.png";

const LoginFormStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    background-color: #13505b;
    border-radius: 30px;
    padding: 1.5rem;
    position: relative;
    z-index: 1;

    &::before {
      position: absolute;
      inset: 0;
      background: url(${logo});
      background-position: center;
      background-size: cover;
      filter: opacity(0.1);
      content: "";
    }

    @media (width <= 870px) {
      width: 50vw;
   }
  `,

  ErrorSpan: styled.span`
    color: #c71c1c;
    font-weight: 600;
    text-align: center;
  `,
  ErrorContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default LoginFormStyled;
