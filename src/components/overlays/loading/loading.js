import React from 'react';

const SPINNER_HEIGHT = 32;
const SPINNER_WIDTH = 256;
const HALF_SPINNER_HEIGHT = 128 / 2;
const SPINNER_SVG = './src/images/loading-cylon.svg';

const overlayStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.7,
  zIndex: 2000,
  height: '100vh'
};

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: SPINNER_WIDTH + 'px',
  height: SPINNER_HEIGHT + 'px',
  margin: '-' + HALF_SPINNER_HEIGHT + 'px 0 0 -' + HALF_SPINNER_HEIGHT + 'px'
};

export default class LoadingOverlay extends React.Component {

  render() {
    const { loading } = this.props;

    if (!loading) {
      return (<div key="not-loading-div"></div>);
    }

    return (
      <div key="loading-div"
          style={overlayStyle}
      >
        <img height={SPINNER_HEIGHT}
            src={SPINNER_SVG}
            style={spinnerStyle}
            width={SPINNER_HEIGHT}
        />
      </div>
    );
  }

}
