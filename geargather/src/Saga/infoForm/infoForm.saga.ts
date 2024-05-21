import {call, put, takeLatest} from 'redux-saga/effects';
import { infoformApi } from '../../api/provider/Infoform/infoform-provider';
import { infoFormAction, infoFormActionSuccess, infoFormActionFail } from '../../Store/Infoform/infoform.store';
import { ApiResponse } from '../../api/request';

function* postInfoFormSaga(action:any){
    try{
        const dataToSend= {data: action.payload};

        const response: ApiResponse = yield call (infoformApi, dataToSend);
        yield put(infoFormActionSuccess());
    }catch(error:any){
        yield put(infoFormActionFail(error.localizedMessage));
    }
}

export function* infoFormSaga(){
    yield takeLatest(infoFormAction.type, postInfoFormSaga);
}