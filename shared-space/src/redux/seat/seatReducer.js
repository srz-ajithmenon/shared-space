const initialState = {
    seat : []
}

const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEAT_INFO_SUCCESS' : return {
            ...state,
            seat: action.seatInfo
        }

        default : return state
    }
}

export default seatReducer