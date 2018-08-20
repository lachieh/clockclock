import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hand from './Hand';

class Clock extends Component {
  previous = 225;

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      this.previous = snapshot;
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    const { hour, minute } = this.props;
    if (prevProps.hour !== hour || prevProps.minute !== minute) {
      return {
        hour,
        minute,
      };
    }
    return null;
  }

  render() {
    const { hour, minute, bgX, bgY } = this.props;

    return (
      <div className="Clock">
        <svg
          className="Clock__Face"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path
            d="M100 3c53.5 0 97 43.5 97 97s-43.5 97-97 97-97-43.5-97-97S46.5 3 100 3m0-3C44.9 0 0 44.9 0 100s44.9 100 100 100 100-44.9 100-100S155.1 0 100 0z"
            fill="#aaa"
          />
          <radialGradient
            id="a"
            cx={bgX}
            cy={bgY}
            r="102"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".708" stopColor="#eee" />
            <stop offset=".806" stopColor="#e9e9e9" />
            <stop offset=".914" stopColor="#dcdcdc" />
            <stop offset="1" stopColor="#ccc" />
          </radialGradient>
          <circle cx="100" cy="100" r="98.5" fill="url(#a)" />
          <Hand short rotation={hour} />
          <Hand long rotation={minute} />
        </svg>
      </div>
    );
  }
}

Clock.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
  bgX: PropTypes.number,
  bgY: PropTypes.number,
};

Clock.defaultProps = {
  hour: 0,
  minute: 0,
  bgX: 100,
  bgY: 105,
};

export default Clock;
