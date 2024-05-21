import React, { useEffect, useState } from "react";
import Button from "../../../Button/Button";
import AddTreasuryStyled from "../AddForm/AddTreasuryForm.styled";
import { deleteTreasuryAction } from "../../../../Store/Treasury/deleteTreasury.store";
import { useDispatch, useSelector } from "react-redux";
import LinearProgress from "@mui/material/LinearProgress";

export interface DeleteTreasuryFormProps {
  open: boolean;
  handleClose: () => void;
  id: any;
}

export const DeleteTreasuryForm = (props: DeleteTreasuryFormProps) => {
  ////////////////////////
  // declarations
  //////////////////

  const dispatch = useDispatch();
  const { loading, error, deleteSuccess } = useSelector((state: any) => {
    return state.deleteTreasury;
  });
  const { treasuries } = useSelector((state: any) => {
    return state.allTreasuries;
  });
  const [descriptionSelected, setDescriptionSelected] = useState(null);

  useEffect(() => {
    const treasury = treasuries.find(
      (treasury: any) => treasury.id === props.id
    );
    setDescriptionSelected(treasury.attributes.Description);
  }, [treasuries, props.id]);

  ////////////////////
  /// //functions
  ///////////////////////

  const deleteAction = () => {
    dispatch(deleteTreasuryAction(props.id));
  };

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
      <h2>Delete a treasury entry</h2>
      {!error && !deleteSuccess && (
        <div>
          Are you sure to delete '{descriptionSelected && descriptionSelected}'
          ?<br></br>
          <AddTreasuryStyled.ButtonContainer>
            <Button label="Cancel" onClick={props.handleClose} />
            <Button label="Delete" variant={"#C71C1C"} onClick={deleteAction} />
          </AddTreasuryStyled.ButtonContainer>
        </div>
      )}

      {deleteSuccess && (
        <>
          <p>Entry deleted succesfully!</p>
          <Button label="Cancel" onClick={props.handleClose} />
        </>
      )}

      {error && (
        <>
          <p>An error has occurred, please try again...</p>
          <Button label="Cancel" onClick={props.handleClose} />
        </>
      )}
    </AddTreasuryStyled.Container>
  );
};

export default DeleteTreasuryForm;
