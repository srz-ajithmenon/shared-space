import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import seatReducer from "./seat/seatReducer";
import bookReducer from "./booked/bookReducer";

const rootReducer = combineReducers({
    userInfo: userReducer,
    seatInfo: seatReducer,
    bookInfo: bookReducer
})

export default rootReducer