import axios from 'axios';

export const CREATING_USER = 'CREATING_USER';
export const CREATED_USER = 'CREATED_USER';
export const USER_ERROR = 'USER_ERROR';

export const validateUser = (userObj) => {
  return dispatch => {
    dispatch({type: CREATING_USER})

    axios.post('http://localhost:3333/users', {...userObj})
         .then(res => {
           dispatch({
             type: CREATED_USER,
             payload: res.data
           })
         })
         .catch(err => {dispatch({type:USER_ERROR, payload: err})})
  }
}
