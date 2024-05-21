import styled from "@emotion/styled";
import logo from '../../../../assets/image.png'

const AddTreasuryStyled = {
  Container: styled.dialog`
    background: #13505b;
    color: white;
    border-radius: 30px;
    border: 2px solid #232d3f;
    z-index: 4;
    padding: 2.5rem;
    &::before {
        position: absolute;
        inset: 0;
        background: url(${logo});
        background-position: center;
        background-size: cover;
        filter: opacity(0.03);
        content: "";
      }
  `,

  Form: styled.form`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: center;
    @media (width <= 740px){
      gap: 1rem;
    } 
  `,

  Leftside: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    gap: 1.5rem;
  `,

  RigthSide: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    gap: 1.5rem;
    padding-top: 0.5rem;
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding-left: 8rem;
    padding-top: 1rem;
    @media (width <= 740px){
      padding-left: 1rem;
    } 
  `,

  ErrorSpan: styled.span`
    color: #232d3f;
    background-color: #c71c1c;
    font-size: 1rem;
    font-weight: 600;
  `,

  RadioButtonContainer: styled.div`
    gap: 1rem;
  `,
};

export default AddTreasuryStyled;
