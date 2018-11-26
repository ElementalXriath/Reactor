import { FETCHING_COMPONENTS, FETCHED_COMPONENTS } from "../Actions/ComponentsAction";

const initialState = {
 fetchingComponents: false,
 fetchedComponents: false,
 components: []
}

const componentsReducer = (state = initiaState, action) => {
  switch (action.type) {
  
    case FETCHING_COMPONENTS: 
      return {
        fetchingComponents: true
      }
    case FETCHED_COMPONENTS:
      return {
        fetchingComponents: false,
        fetchedComponents: true,
        components: action.payload
      }
  }
}

export default componentsReducer;
