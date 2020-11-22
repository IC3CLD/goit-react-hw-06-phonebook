import { EDIT_FILTER } from "../types";
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_FILTER:
      return action.payload;
    default:
      return state;
  }
};
