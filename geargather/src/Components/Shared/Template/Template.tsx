import React, { useState } from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/Footer";
import TemplateStyled from "./Template.styled";
import SideMenu from "../../SideMenu/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";

export interface TemplateProps {
  firstChild?: any;
  secondChild: any;
}

export const Template = (props: TemplateProps) => {
  ////////////////////////
  // declarations
  //////////////////
  const [open, setOpen] = useState(false);

  ////////////////////
  /// //functions
  ///////////////////////
  const openMenu = () => {
    setOpen(!open);
  };

  /////////////////////////7
  /// Return
  //////////
  return (
    <TemplateStyled.Container>
      <Header label="log out" showProfile={true} />
      <TemplateStyled.CenterContainer>
        <TemplateStyled.Border>
          <Button onClick={openMenu}>
            <MenuIcon sx={{ color: "white", fontSize: "2rem" }} />
          </Button>
        </TemplateStyled.Border>
        <TemplateStyled.Center>
          {open && (
            <TemplateStyled.Left>
              {" "}
              <SideMenu />{" "}
            </TemplateStyled.Left>
          )}
          <TemplateStyled.Right>
            {!open && props.secondChild}
            {open && props.firstChild}
          </TemplateStyled.Right>
        </TemplateStyled.Center>
      </TemplateStyled.CenterContainer>
      <Footer />
    </TemplateStyled.Container>
  );
};

export default Template;
