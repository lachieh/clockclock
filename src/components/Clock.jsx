import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { hour, minute } = this.props;
    const shortPath =
      'M92.7 29.5V100c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3V29.5c-2.4-.2-4.8-.4-7.3-.4s-4.9.1-7.3.4z';
    const longPath =
      'M100 11.2c-2.5 0-4.9.1-7.3.3V100c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3V11.5c-2.4-.2-4.8-.3-7.3-.3z';

    return (
      <div className="Clock">
        <svg
          className="Clock__Face"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <path d="M100 200C44.9 200 0 155.1 0 100S44.9 0 100 0s100 44.9 100 100-44.9 100-100 100zm0-195.5C47.3 4.5 4.5 47.3 4.5 100s42.9 95.5 95.5 95.5c52.7 0 95.5-42.9 95.5-95.5 0-52.7-42.8-95.5-95.5-95.5z" />
          <path
            className="Clock__Hand"
            d={shortPath}
            style={{ transform: `rotate(${hour}deg)` }}
          />
          <path
            className="Clock__Hand"
            d={longPath}
            style={{ transform: `rotate(${minute}deg)` }}
          />
        </svg>
      </div>
    );
  }
}

Clock.propTypes = {
  hour: PropTypes.number,
  minute: PropTypes.number,
};

Clock.defaultProps = {
  hour: 0,
  minute: 0,
};

export default Clock;
