import { GET_UNITS_REQUEST, GET_UNITS_REQUEST_SUCCESS } from "./unitsDataActions";

const INITIAL_STATE = {
  units: {
    data: [],
    loading: false
  }
}

const unitsDataReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_UNITS_REQUEST:
      return {
        ...state,
        units: {
          ...state.units,
          loading: true
        }
      };
    case GET_UNITS_REQUEST_SUCCESS:
      return {
        ...state,
        units: {
          ...state.units,
          loading: false,
          data: action.payload?.units
        }
      };
    default:
      return state;
  }
};

export default unitsDataReducer;
