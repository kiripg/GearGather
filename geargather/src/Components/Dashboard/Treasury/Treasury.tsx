import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import Button from "../../Button/Button";
import TreasuryStyled from "./Treasury.styled";
import { useDispatch, useSelector } from "react-redux";
import { treasuriesRequestAction } from "../../../Store/Treasury/treasury.store";
import CircularProgress from "@mui/material/CircularProgress";
import AddTreasuryForm from "../../Form/TreasuryForm/AddForm/AddTreasuryForm";
import { resetAddTreasury } from "../../../Store/Treasury/addTreasury.store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UpdateTreasuryForm from "../../Form/TreasuryForm/UpdateForm/UpdateTreasuryForm";
import DeleteTreasuryForm from "../../Form/TreasuryForm/DeleteForm/DeleteTreasuryForm";
import { resetDeleteTreasury } from "../../../Store/Treasury/deleteTreasury.store";
import { resetUpdateTreasury } from "../../../Store/Treasury/updateTreasury.store";
import dayjs from "dayjs";

function Treasury() {
  ////////////////////////
  // declarations
  //////////////////
  const dispatch = useDispatch();
  const headCells = [
    "Date",
    "Description",
    "Payee",
    "Receiver",
    "Amount",
    "Type",
    "",
  ];
  const { loading, treasuries } = useSelector(
    (state: any) => state.allTreasuries
  );
  const [openAdd, setOpenAdd] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [treasuryId, setTreasuryId] = useState(0);

  const { success } = useSelector((state: any) => {
    return state.addTreasury;
  });

  const { deleteSuccess } = useSelector((state: any) => {
    return state.deleteTreasury;
  });
  const { updateSuccess } = useSelector((state: any) => {
    return state.updateTreasury;
  });

  ////////////////////
  /// //functions
  ///////////////////////

  const openAddForm = () => {
    setOpenAdd(true);
  };
  const closeAddForm = () => {
    setOpenAdd(false);
    if (success) {
      dispatch(treasuriesRequestAction());
    }
    dispatch(resetAddTreasury());
  };

  const openUpdateForm = (id: number) => {
    setOpenUpdate(true);
    setTreasuryId(id);
  };
  const closeUpdateForm = () => {
    setOpenUpdate(false);
    if (updateSuccess) {
      dispatch(treasuriesRequestAction());
    }
    dispatch(resetUpdateTreasury());
  };

  const openDeleteForm = (id: number) => {
    setOpenDelete(true);
    setTreasuryId(id);
  };
  const closeDeleteForm = () => {
    setOpenDelete(false);
    if (deleteSuccess) {
      dispatch(treasuriesRequestAction());
    }
    dispatch(resetDeleteTreasury());
  };

  useEffect(() => {
    dispatch(treasuriesRequestAction());
  }, [dispatch]);

  const calculateTotal = (type: "Income" | "Expense") => {
    if (!treasuries || treasuries.length === 0) {
      return 0;
    }

    const filteredTreasuries = treasuries.filter((treasury: any) => {
      return (
        treasury && treasury.attributes && treasury.attributes.Type === type
      );
    });
    const amounts = filteredTreasuries.map((treasury: any) => {
      return treasury.attributes.Amount || 0;
    });

    const total = amounts.reduce(
      (acc: number, amount: number) => acc + amount,
      0
    );

    return total;
  };

  const totalIncomes = calculateTotal("Income");
  const totalExpenses = calculateTotal("Expense");
  const balance = totalIncomes - totalExpenses;

  /////////////////////////7
  /// Return
  //////////

  return (
    <>
      {loading && <CircularProgress color="success" />}
      {openAdd && <AddTreasuryForm open={openAdd} handleClose={closeAddForm} />}
      {openUpdate && (
        <UpdateTreasuryForm
          open={openUpdate}
          handleClose={closeUpdateForm}
          id={treasuryId}
        />
      )}
      {openDelete && (
        <DeleteTreasuryForm
          open={openDelete}
          handleClose={closeDeleteForm}
          id={treasuryId}
        />
      )}
      <TreasuryStyled.Container>
        <TreasuryStyled.TableContainer>
          <Box sx={{ width: "100%", height: "20rem", overflowY: "scroll" }}>
            <Paper
              sx={{
                width: "100%",
                mb: 2,
                background: "#232D3F",
                borderRadius: "30px",
              }}
            >
              <TableContainer>
                <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size="medium"
                >
                  <TableHead>
                    <TableRow>
                      {headCells.map((cell, index) => (
                        <TableCell
                          key={index}
                          align="center"
                          sx={{ color: "white", fontWeight: "600" }}
                        >
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {treasuries &&
                      treasuries.length > 0 &&
                      treasuries.map((row: any) => {
                        return (
                          <TableRow hover key={row.id}>
                            <TableCell
                              align="left"
                              sx={{ color: "white", width: "10%" }}
                            >
                              {dayjs(row.attributes.Date).format("DD-MM-YYYY")}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{ color: "white", width: "20%" }}
                            >
                              {row.attributes.Description}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{ color: "white", width: "10%" }}
                            >
                              {row.attributes.Payee}
                            </TableCell>
                            <TableCell
                              align="left"
                              sx={{ color: "white", width: "10%" }}
                            >
                              {row.attributes.Reciever}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ color: "white", width: "5%" }}
                            >
                              {row.attributes.Amount} €
                            </TableCell>

                            <TableCell
                              align="center"
                              sx={{ color: "white", width: "20%" }}
                            >
                              <Checkbox
                                checked={row.attributes.Type === "Expense"}
                                readOnly
                                sx={{
                                  color: "white",
                                  "&.Mui-checked": {
                                    color: "#53dd6c",
                                  },
                                }}
                              />
                              Expense
                              <Checkbox
                                checked={row.attributes.Type === "Income"}
                                readOnly
                                sx={{
                                  color: "white",
                                  "&.Mui-checked": {
                                    color: "#53dd6c",
                                  },
                                }}
                              />
                              Income
                            </TableCell>

                            <TableCell
                              align="center"
                              sx={{ color: "white", width: "10%" }}
                            >
                              <EditIcon
                                style={{ cursor: "pointer" }}
                                onClick={() => openUpdateForm(row.id)}
                              />

                              <DeleteIcon
                                style={{ cursor: "pointer" }}
                                onClick={() => openDeleteForm(row.id)}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Box>
        </TreasuryStyled.TableContainer>
        <TreasuryStyled.BalanceContainer>
          <Paper sx={{ background: "#232D3F" }}>
            <TableContainer>
              <Table aria-label="summary table" sx={{ color: "white" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Total Incomes</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      Total Expenses
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>
                      {" "}
                      {totalIncomes} €
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>
                      {totalExpenses}€
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>{balance} €</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </TreasuryStyled.BalanceContainer>
        <TreasuryStyled.ButtonContainer>
          <Button label="Add" onClick={openAddForm} />
          <Button label="Export" variant={"#C71C1C"} />
        </TreasuryStyled.ButtonContainer>
      </TreasuryStyled.Container>
    </>
  );
}

export default Treasury;
