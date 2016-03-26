import { combineReducers } from 'redux';

import loading from './loading.js';
import router from './router.js';

const rootReducer = combineReducers({
  loading,
  router
});

export default rootReducer;
