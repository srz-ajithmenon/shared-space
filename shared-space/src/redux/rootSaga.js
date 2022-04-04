import { all } from "redux-saga/effects";
import {watchUserContainer} from './user/userSaga';
import {watchSeatContainer} from './seat/seatSaga'

export function * rootSaga()
{
    yield all(
        [watchUserContainer(), watchSeatContainer()]
    )
}