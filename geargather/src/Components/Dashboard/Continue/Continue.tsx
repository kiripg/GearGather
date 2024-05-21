import React from "react";
import ContinueStyled from "./Continue.styled";

export const Continue = () => {
    /////////////////////////7
  /// Return
  //////////
  return (
    <>
      <ContinueStyled.Container>
        <ContinueStyled.TitleContainer>
          <ContinueStyled.Title>Continue</ContinueStyled.Title>
        </ContinueStyled.TitleContainer>
        <ContinueStyled.SubtitleContainer>
          {" "}
          <ContinueStyled.Subtitle>
            You <ContinueStyled.Highlight>only</ContinueStyled.Highlight> have
            to choose an option... And{" "}
            <ContinueStyled.Highlight>manage</ContinueStyled.Highlight> your
            motoclub!
          </ContinueStyled.Subtitle>
        </ContinueStyled.SubtitleContainer>
        <ContinueStyled.ImgContainer></ContinueStyled.ImgContainer>

        <ContinueStyled.HelpContainer>
          <ContinueStyled.Help>
            Are you STILL running for help? If so,{" "}
            <ContinueStyled.HelpLink href="#">
              click here
            </ContinueStyled.HelpLink>
            .{" "}
          </ContinueStyled.Help>
        </ContinueStyled.HelpContainer>
      </ContinueStyled.Container>
    </>
  );
};

export default Continue;
