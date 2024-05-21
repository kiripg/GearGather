import styled from "@emotion/styled";

export const ProfileStyled = {
  All: styled.div`
    height: 100vh;
  `,

  Container: styled.div`
        
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 1fr);
            margin 0 auto;
            justify-items: center;
            align-items: center;
            gap: 1rem;
            padding-bottom: 1rem;
            @media (width <= 870px){
              display:flex;
              flex-direction: column;
            }
        `,

  Title: styled.p`
    color: white;
    font-size: 3rem;
    font-weight: 500;
  `,

  TitleHighlight: styled.span`
    color: #53dd6c;
    font-weight: 500;
    font-size: 3rem;
    font-family: "Bangers", system-ui;
  `,

  Label: styled.p`
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
  `,

  Value: styled.p`
    color: white;
    font-size: 1.2rem;
  `,

  PictureContainer: styled.div`
    grid-area: 1 / 1 / 3 / 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  `,

  InfoContainer: styled.div`
    grid-area: 1 / 2 / 3 / 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    justify-content: center;
    background: #13505b;
    border-radius: 30px;
    width: 40rem;
    position: relative;

    &::before {
      border-radius: 30px;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
    }
    @media (width <= 750px){
      width: 20rem;
    }

  `,

  BoardContainer: styled.div`
    grid-area: 3 / 1 / 5 / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #13505b;
    border-radius: 30px;
    width: 60rem;
    position: relative;

    &::before {
      border-radius: 0px 0px 30px 30px;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
    }
    @media (width <= 870px){
      width: 50rem;
    }
    @media (width <= 835px){
      width: 40rem;
    }
    @media (width <= 670px){
      display:none;
    }
  `,

  LogOutContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 20rem;
    gap: 1rem;
    grid-area: 3 / 3 / 5 / 4;
  `,

  TitleContainer: styled.div`
    padding: 3rem 0 0 10rem;
  `,

  InfoSubcontainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.2rem;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    z-index: 3;
  `,

  LabelContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    text-align: left;
  `,

  ButtonContainer: styled.div`
    display: flex;
    align-self: flex-end;
  `,

  BoardTitle: styled.p`
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
  `,
  VocalContainer: styled.p`
    display: flex;
    gap: 3rem;
  `,

  BoardTitleContainer: styled.div`
    align-self: flex-start;
    padding: 2rem 0 1rem 4rem;
    z-index: 3;
  `,
  ProfilePicture: styled.img`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 1px solid #53dd6c;
  `,
};

export default ProfileStyled;
