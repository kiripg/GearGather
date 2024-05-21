import React from "react";
import ProductStyled from "./Product.styled";

export interface Productprops {
  Icon: any;
  Title: string;
  Subtitle: string;
}

export const Product = (props: Productprops) => {
  /////////////////////////7
  /// Return
  //////////
  return (
    <>
      <ProductStyled.Container>
        {props.Icon}
        <ProductStyled.Title> {props.Title} </ProductStyled.Title>

        <ProductStyled.Subtitle> {props.Subtitle} </ProductStyled.Subtitle>
      </ProductStyled.Container>
    </>
  );
};

export default Product;
