import styled from "@emotion/styled";
import Hero from "./../../assets/pexels-am-green-1049872.jpg";
import side from "./../../assets/pexels-cottonbro-studio-5206857.jpg";

export const LPStyled = {
  Container: styled.div`
    background: url(${Hero});
    width: 100%;
    height: 450px;
    background-position: center;
    background-size: cover;
    background-color: #232d3f;
    position: relative;

    &::before {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      content: "";
    }
  `,

  TextContainer: styled.div`
    display: flex;
    align-items: left;
    width: 55ch;
    padding: 40px 0 0 10ch;
    position: relative;
    @media (width <= 570px) {
       padding: 30px 0 0 3ch;
    }
    @media (width <= 500px) {
      width: 50ch;
      padding: 0 0 0 30px;
   }
  `,
  HighlightText: styled.span`
    color: #53dd6c;
    font-weight: 500;
    font-size: 3rem;
    font-family: "Bangers", system-ui;
   
  `,
  Text: styled.p`
    color: white;
    font-size: 3rem;

  `,

  SellerContainer: styled.div`
    display: flex;
    justify-content: space-around;
  `,

  SectionTitle: styled.p`
    color: white;
    font-size: 2.6rem;
    font-weight: 600;
  `,

  SectionHighlight: styled.span`
    color: #53dd6c;
    font-size: 2.6rem;
    font-weight: 400;
    font-family: "Bangers", system-ui;
  `,

  SectionContainer: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5ch;
  `,

  InfoContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `,

  InfoImg: styled.div`
    background: url(${side});
    height: 84vh;
    width: 30vw;
    border-radius: 30px;
    background-position: center;
    background-size: cover;
    background-color: #232d3f;
    position: relative;
    @media (width <= 860px) {
      display:none;
   }

    &::before {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      content: "";
      border-radius: 30px;
    }
  `,
};

export default LPStyled;
