import axios from 'axios';

export const FETCHING_USER = 'FETCHING_USER';
export const FETCHED_USER = 'FETCHED_USER';
export const USER_ERROR = 'USER_ERROR';

export const validateUser = (userObj) => {
  return dispatch => {
    dispatch({type: FETCHING_USER})

    axios.post('http://localhost:3333/users', {userObj})
         .then(res => {
           dispatch({
             type: FETCHED_USER,
             payload: res.data
           })
         })
         .catch(err => {dispatch({type:USER_ERROR, payload: err})})
  }
}
