import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hand extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.previous = snapshot; // TODO: use this value to calculate new rotation
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

    const shortPath =
      'M92.7 29.5V100c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3V29.5c-2.4-.2-4.8-.4-7.3-.4s-4.9.1-7.3.4z';
    const longPath =
      'M100 11.2c-2.5 0-4.9.1-7.3.3V100c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3V11.5c-2.4-.2-4.8-.3-7.3-.3z';

    return (
      <path
        className={
          long || !short
            ? 'Clock__Hand Clock__Hand--long'
            : 'Clock__Hand Clock__Hand--short'
        }
        d={long || !short ? longPath : shortPath}
        style={{ transform: `rotate(${rotation}deg)` }}
      />
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
  rotation: 225,
};

export default Hand;
