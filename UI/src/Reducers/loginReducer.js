import { FETCHING_USER, FETCHED_USER, USER_ERROR } from '../Actions/loginAction';

const initialState = {
  fetchingUser: false,
  fetchedUser: false
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_USER:
      return Object.assign({}, state, {
        fetchingUser: true
      })
    default:
      return state
  }
}

export default loginReducer
