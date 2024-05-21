import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Sagas from "../Saga/sagas";
import menuReducer from "./Menu/menu.store";
import loginReducer from "./Auth/login.store";
import userReducer from "./User/user.store";
import membersReducer from "./Members/members.store";
import passwordReducer from "./Auth/changepassword.store";
import addMemberReducer from "./Members/addMembers.store";
import treasuriesReducer from "./Treasury/treasury.store";
import addTreasuryReducer from "./Treasury/addTreasury.store";
import updateTreasuryReducer from "./Treasury/updateTreasury.store";
import deleteTreasuryReducer from "./Treasury/deleteTreasury.store";
import updateMembersReducer from "./Members/updateMembers.store";
import infoformReducer from "./Infoform/infoform.store";
import OpenFormsReducer from "./Dashboard/OpenForms.store";

const sagaMiddleware = createSagaMiddleware();

const Reducer = combineReducers({
  login: loginReducer,
  menu: menuReducer,
  user: userReducer,
  Password: passwordReducer,
  Allmembers: membersReducer,
  addMember: addMemberReducer,
  updateMembers: updateMembersReducer,
  allTreasuries: treasuriesReducer,
  addTreasury: addTreasuryReducer,
  updateTreasury: updateTreasuryReducer,
  deleteTreasury: deleteTreasuryReducer,
  infoForm: infoformReducer,
  openDialog: OpenFormsReducer,
});

const Store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(Sagas);

export default Store;
