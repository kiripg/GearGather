import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "./../Button/Button";
import Logo from "./../../assets/image.png";
import { useNavigate } from "react-router-dom";
import HeaderStyled from "./header.styled";
import { Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { userAction } from "../../Store/User/user.store";

export const HEADER_HEIGHT = "70px";

export interface Headerprops {
  label: string;
  showProfile?: boolean;
  onClickFunction?: any;
}

function Header(props: Headerprops) {
  ////////////////////////
  // declarations
  //////////////////

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => {
    return state.user;
  });

  ////////////////////
  /// //functions
  ///////////////////////

  const onClickLogIn = () => {
    navigate("/Login");
  };

  const goBackLanding = () => {
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  const onClickDashboard = () => {
    navigate("/Dashboard");
  };

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  /////////////////////////7
  /// Return
  //////////

  return (
    <Box /*sx={{ flexGrow: 1 }}*/>
      <AppBar
        position="static"
        sx={{ background: "#232D3F", height: HEADER_HEIGHT, width: "100%" }}
      >
        <Toolbar>
          <img src={Logo} alt="Logo" height={50} onClick={goBackLanding} />

          <HeaderStyled.Title onClick={goBackLanding}>
            GearGather
          </HeaderStyled.Title>

          {!props.showProfile && props.label !== "Dashboard" && (
            <Button onClick={onClickLogIn} label={props.label} />
          )}
          {props.showProfile && user && (
            <Avatar
              onClick={goToProfile}
              sx={{ border: "2px solid #53DD6C" }}
              src={`http://localhost:1337${user.profilePicture.url}`}
            />
          )}
          {props.showProfile && !user && (
            <Avatar
              onClick={goToProfile}
              sx={{ border: "2px solid #53DD6C" }}
            />
          )}

          {props.label === "Dashboard" && (
            <Button onClick={onClickDashboard} label={props.label} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
