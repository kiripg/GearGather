import { all } from "redux-saga/effects";
import { authSaga } from "./auth/auth.saga";
import { membersSaga } from "./members/members.saga";
import { userInfoSaga } from "./user/user.saga";
import { changePasswordSaga } from "./auth/changepassword.saga";
import { addMemberSaga } from "./members/addMembers.saga";
import { treasuriesSaga } from "./treasury/treasuries.saga";
import { addTreasurySaga } from "./treasury/addTreasurys.saga";
import { deleteTreasurySaga } from "./treasury/deleteTreasury.saga";
import { updateTreasurySaga } from "./treasury/updateTreasury.saga";
import { updateMembersSaga } from "./members/updateMembers.saga";
import { infoFormSaga } from "./infoForm/infoForm.saga";

function* Sagas() {
  yield all([
    authSaga(),
    userInfoSaga(),
    changePasswordSaga(),
    membersSaga(),
    addMemberSaga(),
    updateMembersSaga(),
    treasuriesSaga(),
    addTreasurySaga(),
    deleteTreasurySaga(),
    updateTreasurySaga(),
    infoFormSaga(),
  ]);
}

export default Sagas;
