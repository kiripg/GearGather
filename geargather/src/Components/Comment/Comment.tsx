import { Avatar } from "@mui/material";
import React from "react";
import MotoManiac from "./../../assets/pexels-lj-2085831.jpg";
import CommentStyled from "./Comment.styled";

export const Comment = () => {
    /////////////////////////7
  /// Return
  //////////
  return (
    <>
      <CommentStyled.Container>
        <CommentStyled.Text>
          "GearGather completely transformed the way I run my motoclub. As a
          testimonial, I could say it changed my life, but hey, I'm just a bot.
          Still, trust me, it's that good!"
        </CommentStyled.Text>
        <Avatar
          src={MotoManiac}
          alt="MotoManiac Picture"
          sx={{ width: 65, height: 65 }}
        />
        <CommentStyled.Username>MotoManiacBot</CommentStyled.Username>
      </CommentStyled.Container>
    </>
  );
};

export default Comment;
