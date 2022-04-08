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

function* updSeatSaga (action) {
    try{
        const udata = action.payload;
        const res = yield call(axios.put,"http://localhost:8000/seats/"+udata.id,udata);
        yield put({type:'GET_SEAT_INFO'});
      }
      catch (e) { console.log('error',e) }
}


export function* watchSeatContainer(){
    yield takeEvery('GET_SEAT_INFO', getSeatSaga)
    yield takeEvery('UPD_SEAT_INFO', updSeatSaga)
}