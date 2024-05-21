import styled from "@emotion/styled";

export const MembersStyled = {
  Container: styled.div`
    padding: 1rem 2rem 1rem 2rem;
    z-index: 3;
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

  AccordionContainer: styled.div`
    overflow-y: auto;
    height: 29rem;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,

  HeaderContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem;
    z-index: 3;
  `,

  SearchContainer: styled.div`
    z-index: 3;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  ButtonContainer: styled.div`
    display: flex;
    gap: 3rem;
    z-index: 3;
  `,

  NameContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 1rem;
  `,

  ActiveContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 3rem;
    width: 5rem;
  `,
  EditContainer: styled.div`
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  `,

  PersonalContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  `,

  DetailsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  `,

  NotesContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  `,

  BoardContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,

  LineDiv: styled.div`
    display: flex;
    gap: 0.3rem;
  `,

  Label: styled.p`
    font-size: 1rem;
    font-weight: 600;
  `,

  Value: styled.p`
    font-size: 1rem;
    font-weight: 400;
  `,

  NotesUl: styled.ul`
    list-style: inside;
  `,

  PictureContainer: styled.div`
  @media (width <= 600px){
    display:none;
  }

  `,

};

export default MembersStyled;
