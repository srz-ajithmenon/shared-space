import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function fetchSeatData() {
    return axios({
        method: "get",
        url: "http://localhost:8000/seats/",
    });
}

function* getSeatSaga() {
    const response = yield call(fetchSeatData);
    console.log("output", response)
    yield put({type: 'GET_SEAT_INFO_SUCCESS', seatInfo: response.data})
}


export function* watchSeatContainer(){
    yield takeEvery('GET_SEAT_INFO', getSeatSaga)
}