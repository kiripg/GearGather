import { call, put, takeLatest } from "redux-saga/effects";
import { updateTreasury } from "../../api/provider/Treasury/treasury-providers";
import {
  updateTreasuryAction,
  updateTreasurySuccess,
  updateTreasuryFail,
} from "../../Store/Treasury/updateTreasury.store";
import { ApiResponse } from "../../api/request";

function* putUpdateTreasurySaga(action: any) {
  try {
    const dataToSend = { data: action.payload };

    const response: ApiResponse = yield call(updateTreasury, dataToSend);
    yield put(updateTreasurySuccess());
  } catch (error: any) {
    yield put(updateTreasuryFail(error.localizedMessage));
  }
}

export function* updateTreasurySaga() {
  yield takeLatest(updateTreasuryAction.type, putUpdateTreasurySaga);
}
