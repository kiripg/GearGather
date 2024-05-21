import { call, put, takeLatest } from "redux-saga/effects";
import { deleteTreasuryApi } from "../../api/provider/Treasury/treasury-providers";
import { ApiResponse } from "../../api/request";
import {
  deleteTreasuryAction,
  deleteTreasurySuccess,
  deleteTreasuryError,
} from "../../Store/Treasury/deleteTreasury.store";

function* deleteTreasury(action: any) {
  try {
    const response: ApiResponse = yield call(deleteTreasuryApi, action.payload);
    yield put(deleteTreasurySuccess());
  } catch (error: any) {
    yield put(deleteTreasuryError(error.localizedMessage));
  }
}

export function* deleteTreasurySaga() {
  yield takeLatest(deleteTreasuryAction.type, deleteTreasury);
}
