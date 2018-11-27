import { FETCHING_COMPONENTS, FETCHED_COMPONENTS } from "../Actions/ComponentsAction";

const initialState = {
 fetchingComponents: false,
 fetchedComponents: false,
 components: []
}

const componentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_COMPONENTS:
      return Object.assign({}, state, {
        fetchingComponents: true
      })
    case FETCHED_COMPONENTS:
      return Object.assign({}, state, {
        fetchingComponents: false,
        fetchedComponents: true,
        components: action.payload
      })
    default:
      return state;
  }
}

export default componentsReducer;
