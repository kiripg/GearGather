import React, { useEffect } from "react";
import AddMemberStyled from "../AddMemberForm/AddMemberForm.styled";
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
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import { updateMembersAction } from "../../../../Store/Members/updateMembers.store";

export interface UpdateMemberFormProps {
  open: boolean;
  handleClose: () => void;
  id: number;
}

const UpdateMemberForm = (props: UpdateMemberFormProps) => {
  ////////////////////////
  // declarations
  //////////////////
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error, updateSuccess } = useSelector((state: any) => {
    return state.updateMembers;
  });

  const { members } = useSelector((state: any) => {
    return state.Allmembers;
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

  const onSubmit = (data: any) => {
    const dataToSend: any = {
      id: props.id,
      data: data,
    };

    dispatch(updateMembersAction(dataToSend));
  };

  useEffect(() => {
    if (props.id && members.length > 0) {
      const member = members.find((member: any) => member.id === props.id);

      setValue("Name", member.attributes.Name);
      setValue("Surname", member.attributes.Surname);
      setValue("Address", member.attributes.Address);
      setValue("Birthdate", dayjs(member.attributes.Birthdate));
      setValue("Email", member.attributes.Email);
      setValue("PhoneNumber", member.attributes.PhoneNumber);
      setValue("ArmsSponsor", member.attributes.ArmsSponsor);
      setValue("JoiningDate", dayjs(member.attributes.JoiningDate));
      setValue("Badges", member.attributes.Badges);
      setValue("isActive", member.attributes.isActive);
      setValue("Notes", member.attributes.Notes);
      setValue("Board", member.attributes.Board);
    }
  }, [props.id, members]);

  /////////////////////////7
  /// Return
  //////////
  return (
    <AddMemberStyled.Container open={props.open} >
      {loading && (
        <LinearProgress
          color="success"
          sx={{ width: "80%", margin: "0 auto" }}
        />
      )}
      <h2>Update a Member</h2>

      {!updateSuccess && !error && (
        <AddMemberStyled.Form onSubmit={handleSubmit(onSubmit)}>
          <AddMemberStyled.Leftside>
            <Controller
              name="Name"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Name"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Surname"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Phone Number"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Address"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Email"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
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
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CssDatePicker
                    label="Birthday"
                    format="DD/MM/YYYY"
                    onError={(newError) => setErrorDate(newError)}
                    slotProps={{
                      textField: {
                        variant: "filled",
                        helperText: errorMessage,
                      },
                    }}
                    disableFuture
                    value={value}
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  label="Arms Sponsor"
                  id="custom-css-outlined-input"
                  sx={{ zIndex: "3" }}
                  variant="filled"
                  onChange={onChange}
                  value={value? value : undefined}
                />
              )}
            />

            <Controller
              name="JoiningDate"
              control={control}
              defaultValue={null}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <CssDatePicker
                    label="Joining Date"
                    format="DD/MM/YYYY"
                    onError={(newError) => setErrorDate(newError)}
                    slotProps={{
                      textField: {
                        variant: "filled",
                        helperText: errorMessage,
                      },
                    }}
                    onChange={onChange}
                    disableFuture
                    value={value}
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
              render={({ field: { onChange, value } }) => (
                <>
                  {value && (
                    <CssTextField
                      variant="filled"
                      select={true}
                      label="Board"
                      value={ value }
                      onChange={onChange}
                      sx={{width: '13.5rem'}}
                    >
                      <MenuItem value={"Club President"}>
                        Club President
                      </MenuItem>
                      <MenuItem value={"Vice President"}>
                        Vice President
                      </MenuItem>
                      <MenuItem value={"Secretary"}>Secretary</MenuItem>
                      <MenuItem value={"Treasurer"}>Treasurer</MenuItem>
                      <MenuItem value={"Vocal"}>Vocal</MenuItem>
                      <MenuItem value={"Basic"}>Basic</MenuItem>
                    </CssTextField>
                  )}
                </>
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
              render={({ field: { onChange, value } }) => (
                <>
                  {value && (
                    <CssTextField
                      variant="filled"
                      select={true}
                      label="Is active?"
                      fullWidth
                      value={value}
                      onChange={onChange}
                    >
                      <MenuItem value={"Active"}>Active</MenuItem>
                      <MenuItem value={"Left"}>Left</MenuItem>
                      <MenuItem value={"Banned"}>Banned</MenuItem>
                    </CssTextField>
                  )}
                </>
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
              render={({ field: { onChange, value } }) => (
                <CssTextField
                  variant="filled"
                  multiline={true}
                  minRows={3}
                  label="Notes"
                  value={value? value : undefined}
                  onChange={onChange}
                  fullWidth
                />
              )}
            />

            <Controller
              name="Badges"
              control={control}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "white",
                        "&.Mui-checked": {
                          color: "#53dd6c",
                        },
                      }}
                      onChange={onChange}
                      checked={value}
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

      {updateSuccess && !loading && (
        
          <><span>Member updated succesfully!</span>
          <br />
          <Button label="Close" onClick={props.handleClose} /></>
        
      )}

      {error && !updateSuccess && (
        <>
          <span>An error happen, try again</span>
          <Button label="Close" onClick={props.handleClose} />
        </>
      )}
    </AddMemberStyled.Container>
  );
};

export default UpdateMemberForm;
