import { call, put, takeLatest } from "redux-saga/effects";
import { treasuryAPI } from "../../api/provider/Treasury/treasury-providers";
import {
  treasuriesRequestAction,
  treasuriesError,
  treasuriesSucess,
} from "../../Store/Treasury/treasury.store";
import { ApiResponse } from "../../api/request";

function* getAllTreasuriesSaga(data: any) {
  try {
    const response: ApiResponse = yield call(treasuryAPI);
    yield put(treasuriesSucess(response.data.data));
  } catch (error: any) {
    yield put(treasuriesError(error.message));
  }
}

export function* treasuriesSaga() {
  yield takeLatest(treasuriesRequestAction.type, getAllTreasuriesSaga);
}
