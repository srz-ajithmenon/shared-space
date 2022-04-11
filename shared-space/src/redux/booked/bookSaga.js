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


function* updBookSaga (action) {
    try{
        const udata = action.payload;
        const res = yield call(axios.put,"http://localhost:8000/booked/"+udata.id,udata);
        yield put({type:'GET_BOOK_INFO'});
      }
      catch (e) { console.log('error',e) }
}


export function* watchBookContainer(){
    yield takeEvery('GET_BOOK_INFO', getBookSaga)
    yield takeEvery('UPD_BOOK_INFO', updBookSaga)
}