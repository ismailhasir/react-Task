import { SET_OFFER_COUNT, SET_OFFER_DATA } from "./constants";

const initialState = {
  count: 0,
  offers: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFER_COUNT:
      return {
        ...state,
        count: action.count,
      };

    case SET_OFFER_DATA:
      return {
        ...state,
        offers: action.offers,
      };

    default:
      return state;
  }
};

export default rootReducer;
