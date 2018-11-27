// Use axios for our HTTP requests to server (Promise Based)
import axios from "axios";

// write each action this way to avoid double naming
export const FETCHING_COMPONENTS = "FETCHING_COMPONENTS";
export const FETCHED_COMPONENTS = "FETCHED_COMPONENTS";
export const COMPONENTS_ERROR = "COMPONENTS_ERROR";

const getComponents = () => {
  // place axios get method to server
  return dispatch => {
    // This will let users know that the page is fetching components data
    // Use a ternary in HTML/JSX code that shows a template view before components
    dispatch({type: FETCHING_COMPONENTS});

    // Making a get call to the server to obtain components data
    axios.get('/components')
    // Then server will return a response and we use this to dispatch an action
    // We supply a payload that contains the data for all components
         .then(res => {
            dispatch({
              type: FETCHED_COMPONENTS,
              payload: res.data
            })
         })
    // Add a catch just in case the server cannot connect
    // Supply details to a user when this occurs with the payload data
         .catch(err => {dispatch({type: COMPONENTS_ERROR, payload: err})})
  }
}
