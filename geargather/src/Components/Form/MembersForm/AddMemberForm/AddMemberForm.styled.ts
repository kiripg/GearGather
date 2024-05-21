import styled from "@emotion/styled";
import logo from "../../../../assets/image.png"

const AddMemberStyled = {
  Container: styled.dialog`
    background: #13505b;
    color: white;
    border-radius: 30px;
    border: 2px solid #232d3f;
    z-index: 5;
    padding: 2rem;
    &::before {
        position: absolute;
        inset: 0;
        background: url(${logo});
        background-position: center;
        background-size: cover;
        filter: opacity(0.03);
        content: "";
      }
      @media (width <= 740px){
        width: 80vw;
      }
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-height: 25em;
    justify-content: center;
    padding: 1rem;
    @media (width <= 540px){
      flex-wrap: unwrap;
      gap:1rem;
    }
  `,

  Leftside: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    max-height: 20rem;
    @media (width <= 740px){
      gap: 1rem;
    } 
  `,

  RigthSide: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    max-height: 19rem;
    @media (width <= 740px){
      gap: 1rem;
    } 
  `,

  CenterSide: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    max-height: 20rem;
    @media (width <= 740px){
      gap: 1rem;
    }    
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: flex-end;
    gap: 1rem;
    padding-left: 3rem;
    padding-top: 3.5rem;

    @media (width <= 740px){
      padding-left: 1rem;
    }
  `,

  ForthRow: styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: flex-start;
    gap: 2rem;

    @media (width <= 740px){
      flex-wrap: wrap;
      gap: 1rem;
    }
   
  `,

  ErrorSpan: styled.span`
    color: #c71c1c;
    background-color: #232d3f;
    font-size: 1rem;
    font-weight: 600;
  `,
};

export default AddMemberStyled;
