import React from "react";
import Header from "./../../Components/Header/header";
import Footer from "../../Components/Footer/Footer";
import LPStyled from "./LP.styled";
import Comment from "../../Components/Comment/Comment";
import GroupsIcon from "@mui/icons-material/Groups";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import InfoForm from "../../Components/Form/InfoForm/InfoForm";
import Product from "../../Components/Product/Product";

const LandingPage = () => {
  /////////////////////////
  /// Return
  //////////
  return (
    <>
      <Header label={"Log in"} />
      <br />
      <LPStyled.Container>
        <LPStyled.TextContainer>
          <LPStyled.Text>
            Rev' up your motoclub's potential with{" "}
            <LPStyled.HighlightText>GearGather</LPStyled.HighlightText>- where
            management meets maximum efficiency!
          </LPStyled.Text>
        </LPStyled.TextContainer>
      </LPStyled.Container>
      <br />
      <Comment />
      <br />
      <LPStyled.SectionContainer>
        <LPStyled.SectionTitle>
          {" "}
          What you can do with{" "}
          <LPStyled.SectionHighlight>
            GearGather
          </LPStyled.SectionHighlight> ?{" "}
        </LPStyled.SectionTitle>

        <LPStyled.SellerContainer>
          <Product
            Icon={<GroupsIcon sx={{ color: "white", fontSize: "15ch" }} />}
            Title={"Member's management"}
            Subtitle="Stay in the fast lane of member management: Update contacts effortlessly!"
          />
          <Product
            Icon={
              <EditCalendarIcon sx={{ color: "white", fontSize: "11.7ch" }} />
            }
            Title="Customizable calendar"
            Subtitle="Customize your calendar, plan, and promote motoclub events hassle-free!"
          />
          <Product
            Icon={
              <RequestQuoteIcon sx={{ color: "white", fontSize: "11.8ch" }} />
            }
            Title="Treasury's administration"
            Subtitle="Simplify dues tracking and boost member engagement with our automated treasury system."
          />
        </LPStyled.SellerContainer>
      </LPStyled.SectionContainer>
      <br />
      <br />
      <br />

      <LPStyled.InfoContainer>
        <LPStyled.InfoImg></LPStyled.InfoImg>
        <InfoForm />
      </LPStyled.InfoContainer>

      <br />
      <br />

      <Footer />
    </>
  );
};

export default LandingPage;
