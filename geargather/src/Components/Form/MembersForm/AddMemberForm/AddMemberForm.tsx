import React, { useEffect } from "react";
import AddMemberStyled from "./AddMemberForm.styled";
import { useForm, Controller } from "react-hook-form";
import CssTextField from "../../CSSTextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CssDatePicker from "../../CSSDateInput";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateValidationError } from "@mui/x-date-pickers/models";
import { useDispatch, useSelector } from "react-redux";
import {
  addMemberAction,
  resetAddMembers,
} from "../../../../Store/Members/addMembers.store";
import LinearProgress from "@mui/material/LinearProgress";
import { membersRequestAction } from "../../../../Store/Members/members.store";

export interface AddMemberFormProps {
  open: boolean;
  handleClose: () => void;
}

const AddMemberForm = (props: AddMemberFormProps) => {

  ////////////////////////
  // declarations
  //////////////////
  const {
    control,
    handleSubmit,
    //setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state: any) => {
    return state.addMember;
  });
  const [errorDate, setErrorDate] = React.useState<DateValidationError | null>(
    null
  );

  ////////////////////
  /// //functions
  ///////////////////////

  const errorMessage = React.useMemo(() => {
    switch (errorDate) {
      case "invalidDate": {
        return "Your date is not valid";
      }
      default: {
        return "";
      }
    }
  }, [errorDate]);

  // const dateFormat = (fieldname: string, value: any) => {
  //   const formatedValue = dayjs(value).format("YYYY-MM-DD");
  //   setValue(fieldname, formatedValue);
  // };

  const onSubmit = (data: any) => {
    dispatch(addMemberAction(data));
  };

  useEffect(() => {
    dispatch(resetAddMembers());
    dispatch(membersRequestAction());
  }, [dispatch]);


  /////////////////////////7
  /// Return
  //////////
  return (
    <AddMemberStyled.Container open={props.open} onClose={props.handleClose}>
      {loading && (
        <LinearProgress
          color="success"
          sx={{ width: "80%", margin: "0 auto" }}
        />
      )}
      <h2>Add a new Member</h2>

      {!success && !error && (
        <AddMemberStyled.Form onSubmit={handleSubmit(onSubmit)}>
          <AddMemberStyled.Leftside>
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
            {errors.Name && (
              <AddMemberStyled.ErrorSpan>
                This field is required
              </AddMemberStyled.ErrorSpan>
            )}
            <Controller
              name="Surname"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  label="Surname"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                />
              )}
            />
            {errors.Surname && (
              <AddMemberStyled.ErrorSpan>
                This field is required
              </AddMemberStyled.ErrorSpan>
            )}
            <Controller
              name="PhoneNumber"
              control={control}
              defaultValue={null}
              rules={{
                required: true,
                pattern: {
                  value: /^[6|7]\d{8}$/,
                  message: "Phone Number not valid",
                },
              }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  label="Phone Number"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                />
              )}
            />
            {errors.PhoneNumber && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}
          </AddMemberStyled.Leftside>

          <AddMemberStyled.CenterSide>
            <Controller
              name="Address"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  label="Address"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                />
              )}
            />
            {errors.Address && (
              <AddMemberStyled.ErrorSpan>
                This field is required
              </AddMemberStyled.ErrorSpan>
            )}

            <Controller
              name="Email"
              control={control}
              defaultValue={null}
              rules={{
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email not valid",
                },
              }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  label="Email"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                />
              )}
            />
            {errors.Email && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}

            <Controller
              name="Birthdate"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CssDatePicker
                    label="Birthday"
                    onError={(newError) => setErrorDate(newError)}
                    slotProps={{
                      textField: {
                        variant: "filled",
                        helperText: errorMessage,
                      },
                    }}
                    
                    disableFuture
                    // onChange={(e) => {
                    //   dateFormat("Birthdate", e);
                    // }}
                    onChange={onChange}
                    sx={{width: '13.5rem'}}
                  />
                </LocalizationProvider>
              )}
            />
            {errors.Birthdate && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}
          </AddMemberStyled.CenterSide>

          <AddMemberStyled.RigthSide>
            <Controller
              name="ArmsSponsor"
              control={control}
              defaultValue={null}
              render={({ field: { onChange } }) => (
                <CssTextField
                  label="Arms Sponsor"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="JoiningDate"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CssDatePicker
                    label="Joining Date"
                    onError={(newError) => setErrorDate(newError)}
                    slotProps={{
                      textField: {
                        variant: "filled",
                        helperText: errorMessage,
                      },
                    }}
                    // onChange={(e) => {
                    //   dateFormat("JoiningDate", e);
                    // }}
                    onChange={onChange}
                    disableFuture
                    sx={{width: '13.5rem'}}
                  />
                </LocalizationProvider>
              )}
            />
            {errors.JoiningDate && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}

            <Controller
              name="Board"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  variant="filled"
                  select={true}
                  label="Board"
                  defaultValue={""}
                  onChange={onChange}
                  sx={{width: '13.5rem'}}
                >
                  <MenuItem value={"Club President"}>Club President</MenuItem>
                  <MenuItem value={"Vice President"}>Vice President</MenuItem>
                  <MenuItem value={"Secretary"}>Secretary</MenuItem>
                  <MenuItem value={"Treasurer"}>Treasurer</MenuItem>
                  <MenuItem value={"Vocal"}>Vocal</MenuItem>
                  <MenuItem value={"Basic"}>Basic</MenuItem>
                </CssTextField>
              )}
            />
            {errors.Board && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}
          </AddMemberStyled.RigthSide>

          <AddMemberStyled.ForthRow>
            <Controller
              name="isActive"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <CssTextField
                  variant="filled"
                  select={true}
                  label="Is active?"
                  fullWidth
                  defaultValue={""}
                  onChange={onChange}
                >
                  <MenuItem value={"Active"}>Active</MenuItem>
                  <MenuItem value={"Left"}>Left</MenuItem>
                  <MenuItem value={"Banned"}>Banned</MenuItem>
                </CssTextField>
              )}
            />
            {errors.isActive && (
              <AddMemberStyled.ErrorSpan>
                This field is an invalid input
              </AddMemberStyled.ErrorSpan>
            )}

            <Controller
              name="Notes"
              control={control}
              defaultValue={null}
              render={({ field: { onChange } }) => (
                <CssTextField
                  variant="filled"
                  multiline={true}
                  minRows={3}
                  label="Notes"
                  fullWidth
                  onChange={onChange}
                />
              )}
            />

            <Controller
              name="Badges"
              control={control}
              defaultValue={false}
              render={({ field: { onChange } }) => (
                <FormControlLabel
                  value="badges"
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#53dd6c",
                        },
                      }}
                      onChange={onChange}
                    />
                  }
                  label="Badges?"
                  labelPlacement="start"
                />
              )}
            />

            <AddMemberStyled.ButtonContainer>
              <Button label="Cancel" onClick={props.handleClose} />
              <Button type="submit" label="Add" />
            </AddMemberStyled.ButtonContainer>
          </AddMemberStyled.ForthRow>
        </AddMemberStyled.Form>
      )}

      {success && !loading && (
        <>
          <span>Member added succesfully!</span> <br />
          <Button label="Close" onClick={props.handleClose} />
        </>
      )}

      {error && !success && (
        <>
          <span>An error happen, try again</span><br/>
          <Button label="Close" onClick={props.handleClose} />
        </>
      )}
    </AddMemberStyled.Container>
  );
};

export default AddMemberForm;
