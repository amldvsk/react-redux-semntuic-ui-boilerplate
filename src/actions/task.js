import { TASK_CHOOSEN_POPUP } from './consts';




export const taskChoosenPopUp = (state, task) => {
  // if(state) {
  //   document.querySelector('body').className += " blured";
  // } else {
  //   document.querySelector('body').className = document.querySelector('body').className.replace(' blured', '');
  // }
  return {
      type : TASK_CHOOSEN_POPUP,
      payload : {visible : state, task : task}
  }
};