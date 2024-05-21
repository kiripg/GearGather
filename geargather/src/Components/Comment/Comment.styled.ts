import styled from "@emotion/styled";

const CommentStyled = {
  Container: styled.div`
    background: #13505b;
    border-radius: 30px;
    max-width: 70ch;
    margin: auto;
    height: 40ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      border-radius: 30px;
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.3);
      content: "";
    }
  `,
  Text: styled.p`
    z-index: 3;
    padding: 1ch 10ch 2ch 10ch;
    font-size: 1.2rem;
    color: white;
    font-style: italic;
  `,
  Username: styled.h3`
    color: white;
    z-index: 3;
  `,
};

export default CommentStyled;
