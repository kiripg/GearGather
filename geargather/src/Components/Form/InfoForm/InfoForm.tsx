import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import InfoFormStyled from "./InfoForm.styled";
import CssTextField from "../CSSTextField";
import Button from "../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  infoFormAction,
  resetInfoForm,
} from "../../../Store/Infoform/infoform.store";
import LinearProgress from "@mui/material/LinearProgress";

const InfoForm = () => {
  ////////////////////////
  // declarations
  //////////////////
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, infosuccess, error } = useSelector((state: any) => {
    return state.infoForm;
  });

  ////////////////////
  /// //functions
  ///////////////////////

  const onSubmit = (data: any) => {
    dispatch(infoFormAction(data));
  };

  useEffect(()=>{
    dispatch(resetInfoForm())
  }, [dispatch]);

 
  /////////////////////////7
  /// Return
  //////////

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InfoFormStyled.Macro>
          <InfoFormStyled.TitleContainer>
            <InfoFormStyled.Title>
              Don't you wanna{" "}
              <InfoFormStyled.TitleHighlight>
                join us
              </InfoFormStyled.TitleHighlight>{" "}
              ?
            </InfoFormStyled.Title>
            <InfoFormStyled.Subtitle>
              Fill the form and we will contact you soon
            </InfoFormStyled.Subtitle>
          </InfoFormStyled.TitleContainer>

          <InfoFormStyled.Container>
            {loading && (
              <LinearProgress
                color="success"
                sx={{ width: "80%", margin: "0 auto" }}
              />
            )}
            {!loading && !infosuccess && !error && (
              <>
                <Controller
                  name="Name"
                  control={control}
                  defaultValue={null}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <CssTextField
                      label="Name"
                      id="custom-css-outlined-input"
                      sx={{ zIndex: "3" }}
                      variant="filled"
                      onChange={onChange}
                    />
                  )}
                />
                {errors.Name && <span>This field is required</span>}

                <Controller
                  name="Email"
                  control={control}
                  defaultValue={null}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <CssTextField
                      label="E-mail"
                      id="custom-css-outlined-input"
                      sx={{ zIndex: "3" }}
                      variant="filled"
                      onChange={onChange}
                    />
                  )}
                />
                {errors.Email && <span>This field is required</span>}

                <Controller
                  name="MoreInfo"
                  control={control}
                  defaultValue={null}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <CssTextField
                      label="More Info"
                      id="custom-css-outlined-input"
                      sx={{ zIndex: "3" }}
                      variant="filled"
                      onChange={onChange}
                      multiline
                      rows={4}
                      defaultValue="Write here anything about your motoclub..."
                    />
                  )}
                />
                {errors.MoreInfo && <span>This field is required</span>}

                <br />
                <Button label={"Contact us"} type="submit" />
              </>
            )}
            {infosuccess && 
              <span style={{color:'white', fontWeight: '600', zIndex: 3}}>
                Your info has been sent! An agent will contact you soon.<br/> Thank
                you for trusting in us!
              </span>
            }
            { error && 
              <span style={{color:'white', fontWeight: '600', zIndex: 3}}>An error has occurred, please try again later...</span>
            }
          </InfoFormStyled.Container>
        </InfoFormStyled.Macro>
      </Box>
    </>
  );
};

export default InfoForm;
