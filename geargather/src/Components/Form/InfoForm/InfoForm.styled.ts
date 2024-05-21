import styled from "@emotion/styled";

const InfoFormStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: #13505b;
    border-radius: 30px;
    width: 30vw;
    margin: auto;
    padding: 3rem;
    align-items: center;
    height: 42vh;
    justify-content: center;
    position: relative;

    &::before {
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
      border-radius: 30px;
    }

    @media (width <= 860px) {
      width: 50vw;
   }
   @media (width <= 500px) {
    width: 65vw;
 }
  `,

  Title: styled.p`
    color: white;
    font-size: 2.6rem;
    font-weight: 600;
  `,

  TitleHighlight: styled.span`
    color: #53dd6c;
    font-size: 2.6rem;
    font-weight: 400;
    font-family: "Bangers", system-ui;
  `,

  Subtitle: styled.p`
    color: white;
    font-size: 1.2rem;
  `,
  TitleContainer: styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    max-height: 42vh;
    gap: 1vw;
    padding-bottom: 1vw;
    @media (width <= 860px) {
      width: 50vw;
   }
   @media (width <= 500px) {
    width: 70vw;
 }
  `,

  Macro: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `,
};

export default InfoFormStyled;
