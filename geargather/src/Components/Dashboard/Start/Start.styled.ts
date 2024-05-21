import styled from "@emotion/styled";
import motorcycle from "../../../assets/motorcycle_618867 (1).png";

export const StartStyled = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    z-index: 3;
    @media (width <= 1000px){
      display:flex;
      flex-direction:column;
    }
   
  `,

  Title: styled.p`
    color: white;
    font-size: 3.5rem;
    font-weight: 500;
    @media (width <= 1000px){
      padding-left: 1.5rem;
    }
    @media (width <= 600px){
     font-size: 2.5rem;
     padding-left: 1rem;
    }
  `,

  TitleHighlight: styled.span`
    color: #53dd6c;
    font-family: "Bangers", system-ui;
    letter-spacing: 0.2rem;
  `,

  Subtitle: styled.p`
    padding-top: 0.5rem;
    color: white;
    font-size: 2.5rem;
    text-align: right;
    padding-right: 6rem;
    @media (width <= 600px){
      font-size: 1.5rem;
      padding: 6rem 0 4rem 6rem;
    }
  `,

  SubtitleHighligth: styled.span`
    color: #53dd6c;
    font-family: "Bangers", system-ui;
    letter-spacing: 0.2rem;
  `,

  Help: styled.p`
    color: white;
    font-size: 1.2rem;
    text-align: right;
    padding-right: 2rem;
  `,

  TitleContainer: styled.div`
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
  `,
  ArrowContainer: styled.div`
    grid-area: 1 / 1 / 2 / 2;
    padding-left: 3rem;
    padding-top: 1rem;
  `,

  SubtitleContainer: styled.div`
    grid-area: 2 / 2 / 3 / 3;
    z-index: 3;
  `,

  HelpContainer: styled.div`
    z-index: 3;
    padding-top: 3rem;
  `,

  BackgroundContainer: styled.div`
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
    height: 19rem;
    opacity: 0.3;
    background: url(${motorcycle});
    background-position: 75% 25%;
    background-size: cover;
    border-radius: 0px 0px 30px 30px;
    @media (width <= 1000px){
        display:none;
    }
  `,
  Arrow: styled.img`
    transform: scaleX(-1);
    @media (width <= 1000px){
      height: 6rem;
    }

  `,

  HelpLink: styled.a`
    color: #53dd6c;
    cursor: pointer;

    &:visited {
      color: #3aaa4e;
    }
  `,
};

export default StartStyled;
