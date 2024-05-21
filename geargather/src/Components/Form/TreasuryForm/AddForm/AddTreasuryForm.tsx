import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import CssTextField from "../../CSSTextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CssDatePicker from "../../CSSDateInput";
import Button from "../../../Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateValidationError } from "@mui/x-date-pickers/models";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import AddTreasuryStyled from "./AddTreasuryForm.styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { InputAdornment } from "@mui/material";
import {
  addTreasuryAction,
  resetAddTreasury,
} from "../../../../Store/Treasury/addTreasury.store";
import { treasuriesRequestAction } from "../../../../Store/Treasury/treasury.store";

export interface AddTreasuryFormProps {
  open: boolean;
  handleClose: () => void;
}

export const AddTreasuryForm = (props: AddTreasuryFormProps) => {
  ////////////////////////
  // declarations
  //////////////////

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state: any) => {
    return state.addTreasury;
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
    dispatch(addTreasuryAction(data));
  };

  useEffect(() => {
    dispatch(resetAddTreasury());
    dispatch(treasuriesRequestAction());
  }, [dispatch]);

  /////////////////////////7
  /// Return
  //////////

  return (
    <AddTreasuryStyled.Container open={props.open} onClose={props.handleClose}>
      {loading && (
        <LinearProgress
          color="success"
          sx={{ width: "80%", margin: "0 auto" }}
        />
      )}

      <h2>Add a new entry in Treasury</h2>
      {!success && !error && (
        <>
          <AddTreasuryStyled.Form onSubmit={handleSubmit(onSubmit)}>
            <AddTreasuryStyled.Leftside>
              <Controller
                name="Date"
                control={control}
                defaultValue={null}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CssDatePicker
                      label="Date"
                      format="DD/MM/YYYY"
                      onError={(newError) => setErrorDate(newError)}
                      slotProps={{
                        textField: {
                          variant: "filled",
                          helperText: errorMessage,
                        },
                      }}
                      disableFuture
                      onChange={onChange}
                    />
                  </LocalizationProvider>
                )}
              />
              {errors.Date && (
                <AddTreasuryStyled.ErrorSpan>
                  This field is required
                </AddTreasuryStyled.ErrorSpan>
              )}
              <Controller
                name="Description"
                control={control}
                defaultValue={null}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <CssTextField
                    label="Description"
                    onChange={onChange}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
              {errors.Description && (
                <AddTreasuryStyled.ErrorSpan>
                  This field is required
                </AddTreasuryStyled.ErrorSpan>
              )}

              <Controller
                name="Amount"
                control={control}
                defaultValue={null}
                rules={{
                  required: true,
                  pattern: {
                    value: /^[0-9]?(.)?[0-9]$/,
                    message: "Phone Number not valid",
                  },
                }}
                render={({ field: { onChange } }) => (
                  <CssTextField
                    label="Amount"
                    onChange={onChange}
                    variant="filled"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <p style={{ color: "white" }}>€</p>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              {errors.Amount && (
                <AddTreasuryStyled.ErrorSpan>
                  This field is required
                </AddTreasuryStyled.ErrorSpan>
              )}
            </AddTreasuryStyled.Leftside>

            <AddTreasuryStyled.RigthSide>
              <Controller
                name="Payee"
                control={control}
                defaultValue={null}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <CssTextField
                    label="Payee"
                    onChange={onChange}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
              {errors.Payee && (
                <AddTreasuryStyled.ErrorSpan>
                  This field is required
                </AddTreasuryStyled.ErrorSpan>
              )}

              <Controller
                name="Reciever"
                control={control}
                defaultValue={null}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <CssTextField
                    label="Reciever"
                    onChange={onChange}
                    variant="filled"
                    fullWidth
                  />
                )}
              />
              {errors.Reciever && (
                <AddTreasuryStyled.ErrorSpan>
                  This field is required
                </AddTreasuryStyled.ErrorSpan>
              )}

              <AddTreasuryStyled.RadioButtonContainer>
                <Controller
                  name="Type"
                  control={control}
                  defaultValue={null}
                  rules={{ required: true }}
                  render={({ field: { onChange } }) => (
                    <>
                      <p style={{ fontWeight: "600" }}>Type</p>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={onChange}
                      >
                        <FormControlLabel
                          value="Expense"
                          control={
                            <Radio
                              sx={{
                                color: "white",
                                "&.Mui-checked": {
                                  color: "#53dd6c",
                                },
                              }}
                            />
                          }
                          label="Expense"
                        />
                        <FormControlLabel
                          value="Income"
                          control={
                            <Radio
                              sx={{
                                color: "white",
                                "&.Mui-checked": {
                                  color: "#53dd6c",
                                },
                              }}
                            />
                          }
                          label="Income"
                        />
                      </RadioGroup>
                    </>
                  )}
                />
                {errors.Type && (
                  <AddTreasuryStyled.ErrorSpan>
                    This field is required
                  </AddTreasuryStyled.ErrorSpan>
                )}
              </AddTreasuryStyled.RadioButtonContainer>

              <AddTreasuryStyled.ButtonContainer>
                <Button label="Cancel" onClick={props.handleClose} />

                <Button type="submit" label="Add" />
              </AddTreasuryStyled.ButtonContainer>
            </AddTreasuryStyled.RigthSide>
          </AddTreasuryStyled.Form>
        </>
      )}

      {success && !loading && (
        <>
          <span>Entry added succesfully!</span>
          <Button label="Cancel" onClick={props.handleClose} />
        </>
      )}

      {error && !success && (
        <>
          <span>An error happen, try again</span>
          <Button label="Close" onClick={props.handleClose} />
        </>
      )}
    </AddTreasuryStyled.Container>
  );
};

export default AddTreasuryForm;
