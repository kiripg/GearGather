import styled from "@emotion/styled";

export const ProductStyled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 35ch;
    text-align: center;
  `,

  Title: styled.h3`
    color: white;
  `,
  Subtitle: styled.p`
    color: white;
  `,
};

export default ProductStyled;
