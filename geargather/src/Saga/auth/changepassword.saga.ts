import { call, put, takeLatest } from "redux-saga/effects";
import {
  changePasswordAction,
  changePasswordFailure,
  changePasswordSuccessAction,
} from "../../Store/Auth/changepassword.store";
import { changePasswordApi } from "../../api/provider/Auth/auth-provider";
import { ApiResponse } from "../../api/request";

function* changePassword(action: any) {
  try {
    const response: ApiResponse = yield call(changePasswordApi, action.payload);

    yield put(changePasswordSuccessAction());
  } catch (error: any) {
    yield put(changePasswordFailure(error.localizedMessage));
  }
}

export function* changePasswordSaga() {
  yield takeLatest(changePasswordAction.type, changePassword);
}
