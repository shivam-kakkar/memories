import { OPEN_FORM, CLOSE_FORM } from "../constants/actionTypes.js";

const formReducer = (isFormOpen = false, action) => {
  switch (action.type) {
    case OPEN_FORM:
      return true;
    case CLOSE_FORM:
      return false;
    default:
      return isFormOpen;
  }
};

export default formReducer;
