import React from "react";
import Template from "../../Components/Shared/Template/Template";
import Start from "../../Components/Dashboard/Start/Start";
import Continue from "../../Components/Dashboard/Continue/Continue";
import { useSelector } from "react-redux";
import Members from "../../Components/Dashboard/Members/Members";
import Treasury from "../../Components/Dashboard/Treasury/Treasury";
import Calendar from "../../Components/Dashboard/Calendar/Calendar";

export const Tester = () => {
  ////////////////////////
  // declarations
  //////////////////
  const { member, start, treasury, calendar } = useSelector((state: any) => {
    return state.menu;
  });

  /////////////////////////7
  /// Return
  //////////
  return (
    <>
      {start && <Template secondChild={<Start />} firstChild={<Continue />} />}
      {member && (
        <Template secondChild={<Members />} firstChild={<Members />} />
      )}
      {treasury && (
        <Template secondChild={<Treasury />} firstChild={<Treasury />} />
      )}
      {calendar && (
        <Template secondChild={<Calendar />} firstChild={<Calendar />} />
      )}
    </>
  );
};

export default Tester;
