import { call, put, takeLatest } from "redux-saga/effects";
import { updateMembersApi } from "../../api/provider/Members/members-provider";
import {
  updateMembersAction,
  updateMembersFail,
  updateMembersSuccess,
} from "../../Store/Members/updateMembers.store";
import { ApiResponse } from "../../api/request";

function* putUpdateMembersSaga(action: any) {
  try {
    const datatToSend = { data: action.payload };

    const response: ApiResponse = yield call(updateMembersApi, datatToSend);
    yield put(updateMembersSuccess());
  } catch (error: any) {
    yield put(updateMembersFail(error.localizedMessage));
  }
}

export function* updateMembersSaga() {
  yield takeLatest(updateMembersAction.type, putUpdateMembersSaga);
}
