

import { LOGIN_POPUP_VISIBLE, IS_LOGGED_IN , LOGOUT } from '../actions/consts';


const init = {
  modal : false,
  isLoggdeIn : false
}

export default (state = init, action) => {
  switch (action.type) {
    case LOGIN_POPUP_VISIBLE : {
      return { ...state,  modal : action.payload};
    }
    case IS_LOGGED_IN : {
      return { ...state,  isLoggdeIn : action.payload};
    }
    case LOGOUT : {
      return { ...state,  isLoggdeIn : false};
    }
    default:
      return state;
  }
};