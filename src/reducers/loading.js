import { fromJS } from 'immutable';

/* Constants */

/* Reducer */

const INITIAL_STATE = fromJS({
  loading: false
});

function loadingReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
}

export default loadingReducer;

/* Actions */
