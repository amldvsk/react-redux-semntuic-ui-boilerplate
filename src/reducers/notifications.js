import { NOTIFICATIONS_UNSEEN } from '../actions/consts';

export default (state = [], action) => {
  switch (action.type) {
    case NOTIFICATIONS_UNSEEN : {
      return action.payload;
    }
    default:
      return state;
  }
};