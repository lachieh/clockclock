import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

export default class Digit extends Component {
  static propTypes = {
    number: PropTypes.number,
  };

  static defaultProps = {
    number: 0,
  };

  getPosition = number => {
    const positions = [
      [[180, 90], [270, 180], [180, 0], [0, 180], [90, 0], [0, 270]],
      [[225, 225], [180, 180], [225, 225], [180, 0], [225, 225], [0, 0]],
      [[90, 90], [270, 180], [90, 180], [0, 270], [90, 0], [270, 270]],
      [[90, 90], [270, 180], [90, 90], [270, 0], [90, 90], [270, 0]],
      [[180, 180], [180, 180], [0, 90], [0, 180], [225, 225], [0, 0]],
      [[90, 180], [270, 270], [0, 90], [270, 180], [90, 90], [0, 270]],
      [[180, 90], [270, 270], [180, 0], [180, 270], [0, 90], [270, 0]],
      [[90, 90], [270, 180], [225, 225], [180, 0], [225, 225], [0, 0]],
      [[90, 180], [270, 180], [180, 90], [270, 0], [90, 0], [270, 0]],
      [[90, 180], [180, 270], [0, 90], [180, 0], [90, 90], [270, 0]],
    ];
    return positions[number];
  };

  render() {
    const { number } = this.props;
    const pos = this.getPosition(number);
    return (
      <div className="Digit">
        <Clock hour={pos[0][0]} minute={pos[0][1]} />
        <Clock hour={pos[1][0]} minute={pos[1][1]} />
        <Clock hour={pos[2][0]} minute={pos[2][1]} />
        <Clock hour={pos[3][0]} minute={pos[3][1]} />
        <Clock hour={pos[4][0]} minute={pos[4][1]} />
        <Clock hour={pos[5][0]} minute={pos[5][1]} />
      </div>
    );
  }
}
