import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

const config = {
  props: {
    rotate: '225deg',
  },
  next: {
    rotate: ({ from, rotation }) => {
      console.log(from);
      return rotation;
    },
  },
};

const HandGroup = posed.div(config);

class Hand extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.previous = snapshot;
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    const { rotation } = this.props;
    if (prevProps.rotation !== rotation) {
      return rotation;
    }
    return null;
  }

  render() {
    const { long, short, rotation } = this.props;

    return (
      <HandGroup
        pose="next"
        rotation={rotation}
        className={long || !short ? 'Hand Hand--long' : 'Hand Hand--long'}
      >
        <svg
          className="Hand__image"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path d={long || !short ? longPath : shortPath} />
        </svg>
      </HandGroup>
    );
  }
}

Hand.propTypes = {
  long: PropTypes.bool,
  short: PropTypes.bool,
  rotation: PropTypes.number,
};

Hand.defaultProps = {
  long: false,
  short: false,
  rotation: 0,
};

export default Hand;
