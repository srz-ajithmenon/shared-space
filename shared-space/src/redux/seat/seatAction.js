export const getSeatInfo = () => {
    return {
      type: 'GET_SEAT_INFO',
    }
}

export const updSeatInfo = (seat) => {
  return{
      type: 'UPD_SEAT_INFO',
      payload: seat,
  }
}