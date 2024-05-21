import React from "react";
import StartStyled from "./Start.styled";

import arrow from "../../../assets/curved-arrow-tool-5a3a4d7e3c0ec8.848988421513770366246-removebg-preview.png";

export const Start = () => {
  /////////////////////////7
  /// Return
  //////////
  return (
    <StartStyled.Container>
      <StartStyled.ArrowContainer>
        <StartStyled.Arrow src={arrow} alt="arrow" height={"250rem"} />
      </StartStyled.ArrowContainer>
      <StartStyled.BackgroundContainer></StartStyled.BackgroundContainer>

      <StartStyled.TitleContainer>
        <StartStyled.Title>
          Click here to{" "}
          <StartStyled.TitleHighlight>start</StartStyled.TitleHighlight>
        </StartStyled.Title>
      </StartStyled.TitleContainer>
      <StartStyled.SubtitleContainer>
        <StartStyled.Subtitle>
          And begin{" "}
          <StartStyled.SubtitleHighligth>
            revving up
          </StartStyled.SubtitleHighligth>{" "}
          your motoclub management journey{" "}
          <StartStyled.SubtitleHighligth>now</StartStyled.SubtitleHighligth> !
        </StartStyled.Subtitle>
        <StartStyled.HelpContainer>
          <StartStyled.Help>
            Are you running for help? If so,{" "}
            <StartStyled.HelpLink href="https://www.google.com">
              click here
            </StartStyled.HelpLink>
          </StartStyled.Help>
        </StartStyled.HelpContainer>
      </StartStyled.SubtitleContainer>
    </StartStyled.Container>
  );
};

export default Start;
