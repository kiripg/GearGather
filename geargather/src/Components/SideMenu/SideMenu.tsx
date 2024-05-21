import React from "react";
import { useDispatch } from "react-redux";
import {
  toggleStart,
  toggleMember,
  toggleCalendar,
  toggleTreasury,
} from "../../Store/Menu/menu.store";

import SideMenuStyled from "./SideMenu.styled";

export const SideMenu = () => {
  ////////////////////////
  // declarations
  //////////////////
  const dispatch = useDispatch();

  ////////////////////
  /// //functions
  ///////////////////////

  const startClickHandler = () => {
    dispatch(toggleStart());
  };

  const membersClickHandler = () => {
    dispatch(toggleMember());
  };

  const calendarClickHandler = () => {
    dispatch(toggleCalendar());
  };

  const treasuryClickHandler = () => {
    dispatch(toggleTreasury());
  };

  /////////////////////////7
  /// Return
  //////////
  return (
    <SideMenuStyled.Container>
      <SideMenuStyled.Options>
        <SideMenuStyled.Text onClick={startClickHandler}>
          Start
        </SideMenuStyled.Text>
        <SideMenuStyled.Text onClick={membersClickHandler}>
          Members
        </SideMenuStyled.Text>
        <SideMenuStyled.Text onClick={calendarClickHandler}>
          Calendar
        </SideMenuStyled.Text>
        <SideMenuStyled.Text onClick={treasuryClickHandler}>
          Treasury
        </SideMenuStyled.Text>
      </SideMenuStyled.Options>
    </SideMenuStyled.Container>
  );
};

export default SideMenu;
