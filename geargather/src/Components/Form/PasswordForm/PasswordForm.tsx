import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "@mui/material/Button";
import CssTextField from "../CSSTextField";
import { useDispatch, useSelector } from "react-redux";
import { changePasswordAction } from "../../../Store/Auth/changepassword.store";
import { useForm } from "react-hook-form";
import LinearProgress from "@mui/material/LinearProgress";

export interface PasswordFormProps {
  open: boolean;
  handleClose: () => void;
}

export const PasswordForm = (props: PasswordFormProps) => {
  ////////////////////////
  // declarations
  //////////////////
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { loading, changePasswordSuccess, error } = useSelector(
    (state: any) => {
      return state.Password;
    }
  );

  ////////////////////
  /// //functions
  ///////////////////////
  const onSubmit = (data: any) => {
    dispatch(changePasswordAction(data));
  };

  /////////////////////////7
  /// Return
  //////////

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        id="form-dialog-title"
        sx={{ background: "#232D3F", color: "white" }}
      >
        Change your password
      </DialogTitle>
      <DialogContent sx={{ background: "#232D3F", color: "white" }}>
        {loading && (
          <LinearProgress
            color="success"
            sx={{ width: "80%", margin: "0 auto" }}
          />
        )}
        {!changePasswordSuccess && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <CssTextField
              autoFocus
              margin="dense"
              {...register("currentPassword", { required: true })}
              id="custom-css-outlined-input"
              label="Old Password"
              type="password"
              fullWidth
              variant="filled"
            />
            {errors.identifier && <span>This field is required</span>}
            <CssTextField
              autoFocus
              margin="dense"
              {...register("password", { required: true })}
              id="custom-css-outlined-input"
              label="New Password"
              type="password"
              fullWidth
              variant="filled"
            />
            {errors.identifier && <span>This field is required</span>}
            <CssTextField
              autoFocus
              margin="dense"
              {...register("passwordConfirmation", { required: true })}
              id="custom-css-outlined-input"
              label="Confirm Password"
              type="password"
              fullWidth
              variant="filled"
            />
            {errors.identifier && <span>This field is required</span>}
            {error && <span>A password is wrong. Check them!</span>}

            <DialogActions sx={{ background: "#232D3F", color: "white" }}>
              <Button onClick={props.handleClose} sx={{ color: "white" }}>
                Cancel
              </Button>
              <Button type="submit" sx={{ color: "white" }}>
                Change
              </Button>
            </DialogActions>
          </form>
        )}

        {changePasswordSuccess && !loading && (
          <>
            <span>Password Changed!! </span>
            <Button onClick={props.handleClose} sx={{ color: "white" }}>
              Cancel
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PasswordForm;
