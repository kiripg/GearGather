import styled from "@emotion/styled";
import motorcycle from "../../../assets/motorcycle_618867 (1).png";

export const ContinueStyled = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (width <= 800px){
      display:flex;
      flex-direction: column;
    }
  
  `,

  TitleContainer: styled.div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  `,

  SubtitleContainer: styled.div`
    grid-area: 1 / 2 / 2 / 3;
    z-index: 3;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  `,

  ImgContainer: styled.div`
    grid-area: 2 / 1 / 3 / 2;
    width: auto;
    height: 19rem;
    background: url(${motorcycle});
    background-position: 75% 30%;
    background-size: cover;
    opacity: 0.3;
    @media (width <= 800px){
      height: 15rem;
    }
    @media (width <= 720px){
      height: 12rem;
    }
    @media (width <= 600px){
      height: 10rem;
    }
    @media (width <= 520px){
      display:none;
    }
 
  `,

  HelpContainer: styled.div`
    grid-area: 2 / 2 / 3 / 3;
    z-index: 3;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 9rem 0.5rem 0 4rem;

  `,

  Title: styled.p`
    font-weight: 700;
    font-size: 4rem;
    @media (width <= 800px){
      font-size: 3rem;
    }
  `,

  Subtitle: styled.p`
    font-weight: 500;
    font-size: 2.3rem;
    text-align: right;
    @media (width <= 800px){
      font-size: 2rem;
    }
  `,

  Highlight: styled.span`
    color: #53dd6c;
    color: #53dd6c;
    font-family: "Bangers", system-ui;
    letter-spacing: 0.2rem;
  `,

  Help: styled.p`
    font-size: 1.2rem;
    text-align: right;
    @media (width <= 800px){
      font-size: 1rem;
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

export default ContinueStyled;
