import { call, put, takeLatest } from "redux-saga/effects";
import { addMembersAPI } from "../../api/provider/Members/members-provider";
import {
  addMemberAction,
  addMemberError,
  addMemberSuccess,
} from "../../Store/Members/addMembers.store";
import { ApiResponse } from "../../api/request";

function* postAddMemberSaga(action: any) {
  try {
    /*   const formData= new FormData();
        formData.append('files', action.payload.Picture);
        delete action.payload.Picture;
        formData.append('data', action.payload);
        console.log("formData", formData)*/

    const dataToSend = { data: action.payload };
    const response: ApiResponse = yield call(addMembersAPI, dataToSend);
    yield put(addMemberSuccess());
  } catch (error: any) {
    yield put(addMemberError(error.localizedMessage));
  }
}

export function* addMemberSaga() {
  yield takeLatest(addMemberAction.type, postAddMemberSaga);
}
