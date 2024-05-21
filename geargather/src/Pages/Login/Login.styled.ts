import styled from "@emotion/styled";
import { FOOTER_HEIGHT } from "../../Components/Footer/Footer.styled";
import { HEADER_HEIGHT } from "../../Components/Header/header";

const LoginStyled = {
  All: styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: calc(100% - (${FOOTER_HEIGHT} + ${HEADER_HEIGHT} + 1.5rem));
   
  `,

  TitleContainer: styled.div`
    width: 50ch;
    text-align: center;
  `,
  Title: styled.p`
    color: white;
    font-size: 4rem;
    font-weight: 600;
    @media (width <= 870px) {
      font-size: 3rem;
   }
  `,
  TitleHighlight: styled.span`
    color: #53dd6c;
    font-size: 4rem;
    font-weight: 400;
    font-family: "Bangers", system-ui;
    @media (width <= 570px) {
      font-size: 3rem;
   }
  `,
};

export default LoginStyled;
