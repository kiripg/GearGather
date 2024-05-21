import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MembersStyled from "./Members.styled";
import { Avatar } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { membersRequestAction } from "../../../Store/Members/members.store";
import AddMemberForm from "../../Form/MembersForm/AddMemberForm/AddMemberForm";
import UpdateMemberForm from "../../Form/MembersForm/UpdateMemberForm/UpdateMemberForm";
import EditIcon from "@mui/icons-material/Edit";
import { resetAddMembers } from "../../../Store/Members/addMembers.store";
import { resetUpdateMembers } from "../../../Store/Members/updateMembers.store";
import dayjs from "dayjs";
import profilepicture from "./../../../assets/pexels-lj-2085831.jpg";
import SearchIcon from "@mui/icons-material/Search";


export const Members = () => {

  ////////////////////////
  // declarations
  //////////////////

  const dispatch = useDispatch();
  const { members, loading } = useSelector((state: any) => state.Allmembers);
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [memberId, setMemberId] = useState(0);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searcher, setSearcher] = useState("");
  const { updateSuccess } = useSelector((state: any) => {
    return state.updateMembers;
  });

  const { success } = useSelector((state: any) => {
    return state.addMember;
  });

  // console.log("open,close", openAdd);

  console.log("open,close", openUpdate);

  ////////////////////
  /// //functions
  ///////////////////////

  useEffect(() => {
    dispatch(membersRequestAction());
  }, [dispatch]);

  const openAddForm = () => {
    setOpenAdd(true);
  };

  const closeAddForm = () => {
    console.log('Close function called');
    setOpenAdd(false);
    if (success) {
      dispatch(membersRequestAction());
    }
    dispatch(resetAddMembers());
  };

  const openUpdateForm = (id: number) => {
    setOpenUpdate(true);
    setMemberId(id);
  };

  const closeUpdateForm = () => {
    console.log('Close function called');
    setOpenUpdate(false);
    if (updateSuccess) {
      dispatch(membersRequestAction());
    }
    dispatch(resetUpdateMembers());
  };

  const handleSearch = (e:any) =>{
    setSearcher(e.target.value);
    searchByName(e.target.value);
  }

  const searchByName = (name: string) => {
    if (members && members.length > 0 && name) {
      const filteredMembers = members.filter(
        (member:any) =>
          member.attributes.Name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredNames(filteredMembers);
      
    }
  };

  /////////////////////////7
  /// Return
  //////////

  return (
    <>
      {loading && <CircularProgress color="success" />}
      {openAdd && <AddMemberForm open={openAdd} handleClose={closeAddForm} />}
      {openUpdate && (
        <UpdateMemberForm
          open={openUpdate}
          handleClose={closeUpdateForm}
          id={memberId}
        />
      )}
      <MembersStyled.Container>
        <MembersStyled.HeaderContainer>
          <MembersStyled.ButtonContainer>
            <Button
              label="Add"
              onClick={openAddForm}
              handleClose={closeAddForm}
            />
          </MembersStyled.ButtonContainer>
          <MembersStyled.SearchContainer>
            <input
              type="text"
              placeholder="Type a name to search"
              value={searcher}
              onChange={handleSearch}
            />
            <SearchIcon
              sx={{
                color: "white",
                fontSize: "1.5rem",
                backgroundColor: "#53DD6C",
                borderRadius: "30%",
              }}
              
            />
          </MembersStyled.SearchContainer>
        </MembersStyled.HeaderContainer>
        <MembersStyled.AccordionContainer>

        {filteredNames && filteredNames.length > 0 &&
        
       filteredNames.map((member: any) => (
          <Accordion key={member.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                background: "#232D3F",
                color: "white",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <MembersStyled.NameContainer>
                <MembersStyled.PictureContainer><Avatar src={profilepicture} /> </MembersStyled.PictureContainer>{member.attributes.Name}{" "}
                {member.attributes.Surname}{" "}
              </MembersStyled.NameContainer>
              <MembersStyled.EditContainer>
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => openUpdateForm(member.id)}
                />
              </MembersStyled.EditContainer>
              <MembersStyled.ActiveContainer>
                {member.attributes.isActive === "Active" && (
                  <CircleIcon sx={{ color: "#53DD6C" }} />
                )}
                {member.attributes.isActive === "Left" && (
                  <CircleIcon sx={{ color: "#E9C820" }} />
                )}
                {member.attributes.isActive === "Banned" && (
                  <CircleIcon sx={{ color: "#C71C1C" }} />
                )}
                {member.attributes.isActive}
              </MembersStyled.ActiveContainer>
            </AccordionSummary>
            <AccordionDetails
              sx={{ background: "#232D3F", color: "white" }}
            >
              <MembersStyled.ContentContainer>
                <MembersStyled.PersonalContainer>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Name: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {member.attributes.Name}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Surname: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {member.attributes.Surname}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Address: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {member.attributes.Address}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Birthday: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {dayjs(member.attributes.Birthdate).format(
                        "DD-MM-YYYY"
                      )}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                </MembersStyled.PersonalContainer>
                <MembersStyled.DetailsContainer>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Email: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {member.attributes.Email}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>
                      Phone Number:{" "}
                    </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {member.attributes.PhoneNumber}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>
                      Arms Sponsor:{" "}
                    </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {member.attributes.ArmsSponsor}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>
                      Joining date:{" "}
                    </MembersStyled.Label>
                    <MembersStyled.Value>
                      {" "}
                      {dayjs(member.attributes.JoiningDate).format(
                        "DD-MM-YYYY"
                      )}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Badges: </MembersStyled.Label>
                    <MembersStyled.Value>
                      {member.attributes.Badges ? "YES" : "NO"}
                    </MembersStyled.Value>
                  </MembersStyled.LineDiv>
                </MembersStyled.DetailsContainer>
                <MembersStyled.NotesContainer>
                  <MembersStyled.LineDiv>
                    <MembersStyled.Label>Notes:</MembersStyled.Label>
                  </MembersStyled.LineDiv>
                  <MembersStyled.NotesUl>
                    {member.attributes.Notes}
                  </MembersStyled.NotesUl>
                </MembersStyled.NotesContainer>
                <MembersStyled.BoardContainer>
                  <div>
                    <MembersStyled.LineDiv>
                      <MembersStyled.Label>Board: </MembersStyled.Label>
                    </MembersStyled.LineDiv>
                    <MembersStyled.LineDiv>
                      <MembersStyled.Value>
                        {" "}
                        {member.attributes.Board}
                      </MembersStyled.Value>
                    </MembersStyled.LineDiv>
                  </div>
                  <div>
                    <MembersStyled.LineDiv>
                      <MembersStyled.Label>
                        Due Status:{" "}
                      </MembersStyled.Label>
                    </MembersStyled.LineDiv>
                    <MembersStyled.LineDiv>
                      <MembersStyled.Value>
                        {" "}
                        Owes two months
                      </MembersStyled.Value>
                    </MembersStyled.LineDiv>
                  </div>
                  <Button label="Send an email" />
                </MembersStyled.BoardContainer>
              </MembersStyled.ContentContainer>
            </AccordionDetails>
          </Accordion>
        
       ) )}  

          {members &&
            members.length > 0 &&
            members.map((member: any) => (
              <Accordion key={member.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    background: "#232D3F",
                    color: "white",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <MembersStyled.NameContainer>
                    <Avatar src={profilepicture} /> {member.attributes.Name}{" "}
                    {member.attributes.Surname}{" "}
                  </MembersStyled.NameContainer>
                  <MembersStyled.EditContainer>
                    <EditIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => openUpdateForm(member.id)}
                    />
                  </MembersStyled.EditContainer>
                  <MembersStyled.ActiveContainer>
                    {member.attributes.isActive === "Active" && (
                      <CircleIcon sx={{ color: "#53DD6C" }} />
                    )}
                    {member.attributes.isActive === "Left" && (
                      <CircleIcon sx={{ color: "#E9C820" }} />
                    )}
                    {member.attributes.isActive === "Banned" && (
                      <CircleIcon sx={{ color: "#C71C1C" }} />
                    )}
                    {member.attributes.isActive}
                  </MembersStyled.ActiveContainer>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ background: "#232D3F", color: "white" }}
                >
                  <MembersStyled.ContentContainer>
                    <MembersStyled.PersonalContainer>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Name: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {member.attributes.Name}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Surname: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {member.attributes.Surname}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Address: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {member.attributes.Address}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Birthday: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {dayjs(member.attributes.Birthdate).format(
                            "DD-MM-YYYY"
                          )}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                    </MembersStyled.PersonalContainer>
                    <MembersStyled.DetailsContainer>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Email: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {member.attributes.Email}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>
                          Phone Number:{" "}
                        </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {member.attributes.PhoneNumber}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>
                          Arms Sponsor:{" "}
                        </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {member.attributes.ArmsSponsor}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>
                          Joining date:{" "}
                        </MembersStyled.Label>
                        <MembersStyled.Value>
                          {" "}
                          {dayjs(member.attributes.JoiningDate).format(
                            "DD-MM-YYYY"
                          )}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Badges: </MembersStyled.Label>
                        <MembersStyled.Value>
                          {member.attributes.Badges ? "YES" : "NO"}
                        </MembersStyled.Value>
                      </MembersStyled.LineDiv>
                    </MembersStyled.DetailsContainer>
                    <MembersStyled.NotesContainer>
                      <MembersStyled.LineDiv>
                        <MembersStyled.Label>Notes:</MembersStyled.Label>
                      </MembersStyled.LineDiv>
                      <MembersStyled.NotesUl>
                        {member.attributes.Notes}
                      </MembersStyled.NotesUl>
                    </MembersStyled.NotesContainer>
                    <MembersStyled.BoardContainer>
                      <div>
                        <MembersStyled.LineDiv>
                          <MembersStyled.Label>Board: </MembersStyled.Label>
                        </MembersStyled.LineDiv>
                        <MembersStyled.LineDiv>
                          <MembersStyled.Value>
                            {" "}
                            {member.attributes.Board}
                          </MembersStyled.Value>
                        </MembersStyled.LineDiv>
                      </div>
                      <div>
                        <MembersStyled.LineDiv>
                          <MembersStyled.Label>
                            Due Status:{" "}
                          </MembersStyled.Label>
                        </MembersStyled.LineDiv>
                        <MembersStyled.LineDiv>
                          <MembersStyled.Value>
                            {" "}
                            Owes two months
                          </MembersStyled.Value>
                        </MembersStyled.LineDiv>
                      </div>
                      <Button label="Send an email" />
                    </MembersStyled.BoardContainer>
                  </MembersStyled.ContentContainer>
                </AccordionDetails>
              </Accordion>
            ))}
        </MembersStyled.AccordionContainer>
      </MembersStyled.Container>
    </>
  );
};

export default Members;
