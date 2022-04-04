export const postUserInfo = (user) => {
    return{
        type: 'POST_USER_INFO',
        payload: user,
    }
  }