import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";
import ProfileStyled from "./Profile.styled";
import { useNavigate } from "react-router-dom";
import { PasswordForm } from "../../Components/Form/PasswordForm/PasswordForm";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../Store/User/user.store";
import { membersRequestAction } from "../../Store/Members/members.store";
import { resetPasswordState } from "../../Store/Auth/changepassword.store";

export const Profile = () => {
  ////////////////////////
  // declarations
  //////////////////
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const { user } = useSelector((state: any) => state.user);
  const { members } = useSelector((state: any) => state.Allmembers);

  ////////////////////
  /// //functions
  ///////////////////////

  useEffect(() => {
    dispatch(userAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(membersRequestAction());
  }, [dispatch]);

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/", { replace: true });
  };

  const openPasswordForm = () => {
    setOpenDialog(true);
  };

  const closePasswordForm = () => {
    setOpenDialog(false);
    dispatch(resetPasswordState());
  };

  /////////////////////////7
  /// Return
  //////////
  return (
    <>
      <ProfileStyled.All>
        <Header label="Dashboard" />

        <ProfileStyled.TitleContainer>
          {user && (
            <ProfileStyled.Title>
              This is your profile,{" "}
              <ProfileStyled.TitleHighlight>
                [{user.username}]
              </ProfileStyled.TitleHighlight>{" "}
            </ProfileStyled.Title>
          )}
        </ProfileStyled.TitleContainer>
        <ProfileStyled.Container>
          <ProfileStyled.PictureContainer>
            {user && user.profilePicture && (
              <ProfileStyled.ProfilePicture
                src={`http://localhost:1337${user.profilePicture.url}`}
                alt="profile picture"
              />
            )}
            {/* <ProfileStyled.ProfilePicture src={pic} alt="profile picture" /> */}
            <Button label="Change Picture" />
          </ProfileStyled.PictureContainer>

          {user && (
            <ProfileStyled.InfoContainer>
              <ProfileStyled.InfoSubcontainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Username:</ProfileStyled.Label>{" "}
                  <ProfileStyled.Value>{user.username}</ProfileStyled.Value>
                </ProfileStyled.LabelContainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Email: </ProfileStyled.Label>{" "}
                  <ProfileStyled.Value>{user.email}</ProfileStyled.Value>
                </ProfileStyled.LabelContainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Password:</ProfileStyled.Label>{" "}
                  <ProfileStyled.Value>***********</ProfileStyled.Value>
                </ProfileStyled.LabelContainer>
              </ProfileStyled.InfoSubcontainer>
              <ProfileStyled.ButtonContainer>
                <Button label="Change Password" onClick={openPasswordForm} />
              </ProfileStyled.ButtonContainer>
            </ProfileStyled.InfoContainer>
          )}
          <ProfileStyled.LogOutContainer>
            <ProfileStyled.Title>
              Do you want to{" "}
              <ProfileStyled.TitleHighlight>
                log out
              </ProfileStyled.TitleHighlight>{" "}
              ?{" "}
            </ProfileStyled.Title>
            <Button
              label="Log out"
              variant={"#C71C1C"}
              onClick={handleLogOut}
            />
          </ProfileStyled.LogOutContainer>

          <ProfileStyled.BoardContainer>
            <ProfileStyled.BoardTitleContainer>
              <ProfileStyled.BoardTitle>
                Board Members:{" "}
              </ProfileStyled.BoardTitle>
            </ProfileStyled.BoardTitleContainer>

            <ProfileStyled.InfoSubcontainer>
              <>
                {" "}
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Club President:</ProfileStyled.Label>{" "}
                  {members &&
                    members.length > 0 &&
                    members.map(
                      (member: any) =>
                        member.attributes.Board === "Club President" && (
                          <ProfileStyled.Value key={member.id}>
                            {member.attributes.Name} {member.attributes.Surname}{" "}
                          </ProfileStyled.Value>
                        )
                    )}
                </ProfileStyled.LabelContainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Vice President:</ProfileStyled.Label>{" "}
                  {members &&
                    members.length > 0 &&
                    members.map(
                      (member: any) =>
                        member.attributes.Board === "Vice President" && (
                          <ProfileStyled.Value key={member.id}>
                            {member.attributes.Name} {member.attributes.Surname}{" "}
                          </ProfileStyled.Value>
                        )
                    )}
                </ProfileStyled.LabelContainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Secretary: </ProfileStyled.Label>{" "}
                  {members &&
                    members.length > 0 &&
                    members.map(
                      (member: any) =>
                        member.attributes.Board === "Secretary" && (
                          <ProfileStyled.Value key={member.id}>
                            {member.attributes.Name} {member.attributes.Surname}{" "}
                          </ProfileStyled.Value>
                        )
                    )}
                </ProfileStyled.LabelContainer>
                <ProfileStyled.LabelContainer>
                  <ProfileStyled.Label>Treasurer: </ProfileStyled.Label>
                  {members &&
                    members.length > 0 &&
                    members.map(
                      (member: any) =>
                        member.attributes.Board === "Treasurer" && (
                          <ProfileStyled.Value key={member.id}>
                            {member.attributes.Name} {member.attributes.Surname}{" "}
                          </ProfileStyled.Value>
                        )
                    )}
                </ProfileStyled.LabelContainer>
              </>
            </ProfileStyled.InfoSubcontainer>

            <ProfileStyled.InfoSubcontainer>
              <ProfileStyled.VocalContainer>
                {members &&
                  members.length > 0 &&
                  members
                    .filter(
                      (member: any) => member.attributes.Board === "Vocal"
                    )
                    .slice(0, 2)
                    .map((member: any) => (
                      <ProfileStyled.LabelContainer>
                        {" "}
                        <ProfileStyled.Label>Vocal: </ProfileStyled.Label>
                        <ProfileStyled.Value key={member.id}>
                          {member.attributes.Name} {member.attributes.Surname}{" "}
                        </ProfileStyled.Value>
                      </ProfileStyled.LabelContainer>
                    ))}
              </ProfileStyled.VocalContainer>
              <ProfileStyled.VocalContainer>
                {members &&
                  members.length > 0 &&
                  members
                    .filter(
                      (member: any) => member.attributes.Board === "Vocal"
                    )
                    .slice(2, 4)
                    .map(
                      (member: any) =>
                        member.attributes.Board === "Vocal" && (
                          <ProfileStyled.LabelContainer>
                            {" "}
                            <ProfileStyled.Label>Vocal: </ProfileStyled.Label>
                            <ProfileStyled.Value key={member.id}>
                              {member.attributes.Name}{" "}
                              {member.attributes.Surname}{" "}
                            </ProfileStyled.Value>
                          </ProfileStyled.LabelContainer>
                        )
                    )}
              </ProfileStyled.VocalContainer>
            </ProfileStyled.InfoSubcontainer>
          </ProfileStyled.BoardContainer>
        </ProfileStyled.Container>

        <PasswordForm open={openDialog} handleClose={closePasswordForm} />
        <Footer />
      </ProfileStyled.All>
    </>
  );
};

export default Profile;
