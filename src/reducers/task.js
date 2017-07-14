

import { TASK_CHOOSEN_POPUP } from '../actions/consts';


const init = {
  popup_visible : false,
  choosen_task : {}
}

export default (state = init, action) => {
  switch (action.type) {
    case TASK_CHOOSEN_POPUP : {
      return { ...state, popup_visible : action.payload.visible, choosen_task : action.payload.task };
    }
    default:
      return state;
  }
};