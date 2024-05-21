import styled from "@emotion/styled";

export const FOOTER_HEIGHT = "150px";

export const FooterStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    background-color: #232d3f;
    align-content: center;
    justify-content: space-around;
    padding: 10px;
    max-height: ${FOOTER_HEIGHT};
  `,

  TextContainer: styled.div`
    display: flex;
    justify-content: center;
  `,

  SocialDiv: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: large;
  `,

  SocialIcons: styled.div`
    display: flex;
    justify-content: space-evenly !important;
    padding-top: 1rem;
    padding-bottom: 0.4rem;
  `,

  Text: styled.span`
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    text-align: center;
  `,

  LegalDiv: styled.div`
    display: flex;
    align-items: flex-end;
  `,

  LegalText: styled.p`
    color: white;
    font-size: 0.9rem;
    font-weight: 200;
    margin-left: 5px;
    text-align: right;
  `,

  Copyright: styled.p`
    color: white;
    font-size: 0.9rem;
    font-weight: 200;
    text-align: center;
  `,

  CopyrightDiv: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  LogoContainer: styled.div`
    max-width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (width <= 500px) {
      width: 40vw;
   }
   @media (width <= 860px) {
    width: 30%;
 }
  `,
};

export default FooterStyled;
