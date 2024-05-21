import React from "react";
import Logo from "./../../assets/image.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterStyled from "./Footer.styled";

export const Footer = () => {
  /////////////////////////7
  /// Return
  //////////
  return (
    <FooterStyled.Container>
      <FooterStyled.LogoContainer>
        <img src={Logo} alt="Logo" height="110" width="100%" />
      </FooterStyled.LogoContainer>

      <FooterStyled.SocialDiv>
        <FooterStyled.TextContainer>
          <FooterStyled.Text>Follow us in our social media</FooterStyled.Text>
        </FooterStyled.TextContainer>

        <FooterStyled.SocialIcons>
          <div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon fontSize="large" sx={{ color: "white" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon fontSize="large" sx={{ color: "white" }} />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <XIcon fontSize="large" sx={{ color: "white" }} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="large" sx={{ color: "white" }} />
            </a>
          </div>
        </FooterStyled.SocialIcons>

        <FooterStyled.CopyrightDiv>
          {" "}
          <FooterStyled.Copyright>
            GearGather © 2024 by Kirissa Povedano is licensed under CC BY-NC-ND
            4.0{" "}
          </FooterStyled.Copyright>
        </FooterStyled.CopyrightDiv>
      </FooterStyled.SocialDiv>

      <FooterStyled.LegalDiv>
        <FooterStyled.LegalText>
          Legal resources and documentation
        </FooterStyled.LegalText>
      </FooterStyled.LegalDiv>
    </FooterStyled.Container>
  );
};

export default Footer;
