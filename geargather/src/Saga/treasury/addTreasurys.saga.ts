import { call, put, takeLatest } from "redux-saga/effects";
import { addTreasuryApi } from "../../api/provider/Treasury/treasury-providers";
import {
  addTreasuryAction,
  addTreasurySuccess,
  addTreasuryError,
} from "../../Store/Treasury/addTreasury.store";
import { ApiResponse } from "../../api/request";

function* postAddTreasurySaga(action: any) {
  try {
    const dataToSend = { data: action.payload };
    const response: ApiResponse = yield call(addTreasuryApi, dataToSend);
    yield put(addTreasurySuccess());
  } catch (error: any) {
    yield put(addTreasuryError(error.localizedMessage));
  }
}

export function* addTreasurySaga() {
  yield takeLatest(addTreasuryAction.type, postAddTreasurySaga);
}
