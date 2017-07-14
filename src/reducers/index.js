import { combineReducers } from 'redux';


import Login from './login';
import Navigation from './navigation';
import Task from './task';
import Notifications from './notifications';

export default combineReducers({
  login : Login,
  navigation : Navigation,
  task : Task,
  notifications : Notifications
});