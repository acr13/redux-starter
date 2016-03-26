import { fromJS } from 'immutable';

/* Constants */
export const HOME_ROUTE = 'home';

const ROUTES = [
  HOME_ROUTE
];

// Members
const CHANGE_ROUTE = 'CHANGE_ROUTE';
const INVALID_ROUTE = 'INVALID_ROUTE';

/* Reducer */

const INITIAL_STATE = fromJS({
  route: HOME_ROUTE
});

function loadingReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

    case CHANGE_ROUTE:
      return state.merge(fromJS({
        route: action.payload
      }));

    case INVALID_ROUTE:
      return state.merge(fromJS({
        route: HOME_ROUTE
      }));

    default:
      return state;
  }
}

export default loadingReducer;

/* Actions */

export function changeRoute(route) {
  if (ROUTES.indexOf(route) === -1) {
    return {type: INVALID_ROUTE};
  }

  return {type: CHANGE_ROUTE, payload: route};
}
