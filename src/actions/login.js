
import { LOGIN_POPUP_VISIBLE, IS_LOGGED_IN, LOGOUT } from './consts';
import Auth from '../services/Auth/Auth';



export const loginPopUpVisible = (state) => {
  // if(state) {
  //   document.querySelector('body').className += " blured";
  // } else {
  //   document.querySelector('body').className = document.querySelector('body').className.replace(' blured', '');
  // }
  return {
      type : LOGIN_POPUP_VISIBLE,
      payload : state
  }
};


export const setIsLoggedIn = (state) => {
  return {
      type : IS_LOGGED_IN,
      payload : state
  }
}

export const logout = (state) => {
  new Auth().logout()
  return {
      type : LOGOUT,
      payload : state
  }
}