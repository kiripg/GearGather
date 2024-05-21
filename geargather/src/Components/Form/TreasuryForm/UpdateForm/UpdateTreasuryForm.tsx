import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CssTextField from "../../CSSTextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CssDatePicker from "../../CSSDateInput";
import Button from "../../../Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DateValidationError } from "@mui/x-date-pickers/models";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";
import AddTreasuryStyled from "../AddForm/AddTreasuryForm.styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { InputAdornment } from "@mui/material";
import { updateTreasuryAction } from "../../../../Store/Treasury/updateTreasury.store";

export interface UpdateTreasuryFormProps {
  open: boolean;
  handleClose: () => void;
  id: any;
}

export const UpdateTreasuryForm = (props: UpdateTreasuryFormProps) => {
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
  const { treasuries } = useSelector((state: any) => {
    return state.allTreasuries;
  });
  const [errorDate, setErrorDate] = React.useState<DateValidationError | null>(
    null
  );

  const { updateSuccess, loading, error } = useSelector((state: any) => {
    return state.updateTreasury;
  });

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
    dispatch(updateTreasuryAction(dataToSend));
  };

  useEffect(() => {
    if (props.id && treasuries.length > 0) {
      const treasury = treasuries.find(
        (treasuries: any) => treasuries.id === props.id
      );
      setValue("Description", treasury.attributes.Description);
      setValue("Date", dayjs(treasury.attributes.Date));
      setValue("Type", treasury.attributes.Type);
      setValue("Payee", treasury.attributes.Payee);
      setValue("Reciever", treasury.attributes.Reciever);
      setValue("Amount", treasury.attributes.Amount);
    }
  }, [props.id, treasuries]);

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
      {!updateSuccess && !error && (
        <>
          <AddTreasuryStyled.Form onSubmit={handleSubmit(onSubmit)}>
            <AddTreasuryStyled.Leftside>
              <Controller
                name="Date"
                control={control}
                defaultValue={null}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
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
                      value={value}
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
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Description"
                    onChange={onChange}
                    value={value}
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
                rules={{
                  required: true,
                  pattern: {
                    value: /^[0-9]?(.)?[0-9]$/,
                    message: "Phone Number not valid",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Amount"
                    onChange={onChange}
                    value={value}
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
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Payee"
                    onChange={onChange}
                    value={value}
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
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CssTextField
                    label="Reciever"
                    onChange={onChange}
                    value={value}
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
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <p style={{ fontWeight: "600" }}>Type</p>
                      {value && (
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="radio-buttons-group"
                          onChange={onChange}
                          defaultValue={value}
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
                      )}
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

      {updateSuccess && !loading && (
        <>
          <span>Entry added succesfully!</span>
          <Button label="Cancel" onClick={props.handleClose} />
        </>
      )}

      {error && (
        <>
          <span>An error happen, try again</span>
          <Button label="Close" onClick={props.handleClose} />
        </>
      )}
    </AddTreasuryStyled.Container>
  );
};

export default UpdateTreasuryForm;
