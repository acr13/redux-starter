import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

/* Routes */
import { HOME_ROUTE } from '../reducers/router.js';

/* Containers */
import LoadingOverlay from '../components/overlays/loading/loading.js';
import Test from './Test.js';

function mapStateToProps(state) {
  return {
    isLoading: state.loading.get('loading'),
    route: state.router.get('route')
  };
}

function mapDispatchToProps() {
  return {};
}

class Router extends Component {

  render() {
    const { isLoading, route } = this.props;

    let currentRoute = null;

    switch (route) {
      case HOME_ROUTE:
        currentRoute = <Test />;
        break;

      default:
        currentRoute = 'table';
    }

    console.log(isLoading);

    return (
      <div>
        <LoadingOverlay loading={isLoading} />
        {currentRoute}
      </div>
    );
  }
}

Router.propTypes = {
  route: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
