import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function fetchBookData() {
    return axios({
        method: "get",
        url: "http://localhost:8000/booked/",
    });
}

function* getBookSaga() {
    const response = yield call(fetchBookData);
    console.log("output", response)
    yield put({type: 'GET_BOOK_INFO_SUCCESS', bookInfo: response.data})
}


export function* watchBookContainer(){
    yield takeEvery('GET_BOOK_INFO', getBookSaga)
}