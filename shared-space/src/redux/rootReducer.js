import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import seatReducer from "./seat/seatReducer";

const rootReducer = combineReducers({
    userInfo: userReducer,
    seatInfo: seatReducer
})

export default rootReducer