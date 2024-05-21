import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginAction,
  loginErrorAction,
  loginSucessAction,
} from "../../Store/Auth/login.store";
import { loginApi } from "../../api/provider/Auth/auth-provider";
import { ApiResponse } from "../../api/request";
import { meApi } from "../../api/provider/Auth/auth-provider";
import { userData } from "../../Store/User/user.store";

function* loginSaga(data: any) {
  try {
    const responseLogin: ApiResponse = yield call(loginApi, data.payload);
    localStorage.setItem("accessToken", responseLogin.data.jwt);
    const response: ApiResponse = yield call(meApi);
    yield put(userData(response.data));
    yield put(loginSucessAction());
  } catch (error: any) {
    yield put(loginErrorAction(error.localizedMessage));
  }
}

export function* authSaga() {
  yield takeLatest(loginAction.type, loginSaga);
}
