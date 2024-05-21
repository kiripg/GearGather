import styled from "@emotion/styled";

export const TreasuryStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
    padding: 1.5rem 2rem 1.5rem 2rem;
    gap: 1rem;
    @media (width <= 750px){
      width: 37rem;
    }
    @media (width <= 720px){
      width: 35rem;
    }
    @media (width <= 680px){
      width: 33rem;
    }
    @media (width <= 630px){
      width: 30rem;
    }
    @media (width <= 580px){
      width: 27rem;
    }
    @media (width <= 550px){
      width: 25rem;
    }
  `,
  TableContainer: styled.div`
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100rem;
  `,

  BalanceContainer: styled.div`
    height: auto;
    z-index: 3;
    display: flex;
    align-self: right;
    margin-left: auto;
  `,
  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
    padding-left: 2rem;
  `,
};

export default TreasuryStyled;
