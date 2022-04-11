export const getBookInfo = () => {
    return {
      type: 'GET_BOOK_INFO',
    }
}

export const updBookInfo = (book) => {
  return{
      type: 'UPD_BOOK_INFO',
      payload: book,
  }
}