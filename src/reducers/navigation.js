

import { IS_ROOT } from '../actions/consts';


const init = {
  isRoot : true,
}

export default (state = init, action) => {
  switch (action.type) {
    case IS_ROOT : {
      return { ...state,  isRoot : action.payload};
    }
    default:
      return state;
  }
};