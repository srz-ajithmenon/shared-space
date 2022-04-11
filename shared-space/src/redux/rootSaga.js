import { all } from "redux-saga/effects";
import {watchUserContainer} from './user/userSaga';
import {watchSeatContainer} from './seat/seatSaga';
import {watchBookContainer} from './booked/bookSaga'

export function * rootSaga()
{
    yield all(
        [watchUserContainer(), watchSeatContainer(), watchBookContainer()]
    )
}