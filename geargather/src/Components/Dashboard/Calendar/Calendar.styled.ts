import styled from "@emotion/styled";

export const CalendarStyled = {
  Container: styled.div`
    padding: 2rem 3rem 1rem 3rem;
    @media (width <= 600px){
      max-width: 34rem;
    }
    @media (width <= 580px){
      max-width: 33rem;
    }
  `,
};

export default CalendarStyled;
