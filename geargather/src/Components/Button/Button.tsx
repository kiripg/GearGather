import React from "react";
import ButtonStyled from "./Button.styled";

export interface Buttonprops {
  onClick?: () => void;
  label: string;
  variant?: any;
  type?: any;
  handleClose?: any;
}

const Button = (props: Buttonprops) => {
  /////////////////////////
  /// Return
  //////////
  return (
    <ButtonStyled.Container
      type={props.type}
      onClick={() => props.onClick && props.onClick()}
      style={{ background: props.variant }}
    >
      {props.label}
    </ButtonStyled.Container>
  );
};
export default Button;
