import styled from "@emotion/styled";
import { FOOTER_HEIGHT } from "../../Footer/Footer.styled";
import { HEADER_HEIGHT } from "../../Header/header";

export const TemplateStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  `,

  CenterContainer: styled.div`
    height: calc(100% - (${FOOTER_HEIGHT} + ${HEADER_HEIGHT})-2rem);
    padding: 1rem 0px 1rem 0px;
  `,

  Center: styled.div`
    display: flex;
    flex-direction: row;
    background: #13505b;
    border-radius: 0px 0px 30px 30px;
    color: white;
    margin: 0 auto;
    max-width: 85vw;
    height: 610px;
    padding: 0rem 2rem 0rem 0rem;
    z-index: 1;
    position: relative;
    &::before {
      border-radius: 0px 0px 30px 30px;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
    }
    @media (width <= 1000px){
      display:flex;
      flex-direction:column;
      height: auto;
    }
  `,
  Left: styled.div`
    flex: 1;
    max-width: 13rem;
    max-height: 545px;
    @media (width <= 1000px){
      width: 85vw;
    }
  `,

  Right: styled.div`
    flex: 2;
  `,

  Border: styled.div`
    background: #232d3f;
    width: 100%;
    padding: 0.6rem 2rem 0.6rem 0;
    border-radius: 30px 30px 0px 0px;
    position: relative;
    margin: 0 auto;
    max-width: 85vw;
  `,
};

export default TemplateStyled;
