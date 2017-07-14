import { NOTIFICATIONS_UNSEEN } from './consts';

export const notifications = (notifications) => {
  return {
      type : NOTIFICATIONS_UNSEEN,
      payload : notifications
  }
}