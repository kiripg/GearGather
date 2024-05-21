import styled from "@emotion/styled";

export const SideMenuStyled = {
  Container: styled.div`
    background: #232D3F;
    display:flex;
    flex-direction: column;
    height: 100%;
    margin 0;
    z-index: 3;
    padding: 2rem 2rem 2rem 0;
    border-radius: 0 0 0 30px;

    @media (width <= 1000px){
      display:flex;
      flex-direction:row;
      width: 85vw;
      border-radius: 0px;
      height: 5vw;
      align-items: center;
    }
    `,

  Options: styled.ul`
    color: white;
    z-index: 3;
    list-style: none;
    @media (width <= 1000px){
      display:flex;
      flex-direction:row;
      gap: 1rem;
    }
  `,

  Text: styled.li`
    text-decoration: underline;
    font-weight: 600;
    font-size: 1.3rem;
    margin-top: 2.5rem;
    margin-left: 2.3rem;
    cursor: pointer;
    margin-bottom: 2.5rem;
    @media (width <= 870px){
    margin-left: 0.5rem;
    }
    @media (width <= 1000px){
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }
  `,
};

export default SideMenuStyled;
