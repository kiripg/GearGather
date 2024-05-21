import { call, put, takeLatest } from "redux-saga/effects";
import { membersAPI } from "../../api/provider/Members/members-provider";
import {
  memberErrorAction,
  membersRequestAction,
  membersSuccessAction,
} from "../../Store/Members/members.store";
import { ApiResponse } from "../../api/request";

function* getAllMembersSaga(data: any) {
  try {
    const response: ApiResponse = yield call(membersAPI);
    yield put(membersSuccessAction(response.data.data));
  } catch (error: any) {
    yield put(memberErrorAction(error.message));
  }
}

export function* membersSaga() {
  yield takeLatest(membersRequestAction.type, getAllMembersSaga);
}
