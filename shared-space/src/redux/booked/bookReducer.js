const initialState = {
    book : []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOOK_INFO_SUCCESS' : return {
            ...state,
            book: action.bookInfo
        }

        default : return state
    }
}

export default bookReducer