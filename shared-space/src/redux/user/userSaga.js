import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function* postUserSaga (action) {
    try{
        const udata = action.payload;
        const res = yield call(axios.post,"http://localhost:8000/users/",udata);      
        console.log("output", res)
        yield put({type:'POST_USER_INFO_SUCCESS',userInfo : res.data});
      }
      catch (e) { console.log('error',e) }
}

export function* watchUserContainer(){
    yield takeEvery('POST_USER_INFO', postUserSaga)
}