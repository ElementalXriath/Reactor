import { CREATING_USER, CREATED_USER, USER_ERROR } from '../Actions/loginAction';

const initialState = {
  creatingUser: false,
  createdUser: false,
  user_login_error: false,
  error: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATING_USER:
      return Object.assign({}, state, {
        creatingUser: true
      })
    case CREATED_USER:
      return Object.assign({}, state, {
        creatingUser: false,
        createdUser: true
      })
    case USER_ERROR:
      return Object.assign({}, state, {
        user_login_error: true,
        error: action.payload
      })
    default:
      return state
  }
}

export default loginReducer
