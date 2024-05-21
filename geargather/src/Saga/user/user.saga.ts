import { call, put, takeLatest } from "redux-saga/effects";
import { meApi } from "../../api/provider/Auth/auth-provider";
import {
  userAction,
  userData,
  userDataError,
} from "../../Store/User/user.store";
import { ApiResponse } from "../../api/request";

function* getUserInfoSaga(data: any) {
  try {
    const response: ApiResponse = yield call(meApi);
    yield put(userData(response.data));
  } catch (error: any) {
    yield put(userDataError(error.localizedMessage));
  }
}

export function* userInfoSaga() {
  yield takeLatest(userAction.type, getUserInfoSaga);
}
