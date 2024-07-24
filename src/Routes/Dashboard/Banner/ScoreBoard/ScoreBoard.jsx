import React from 'react';
import PropTypes from 'prop-types';

import cn from './ScoreBoard.module.scss';

export const ScoreBoard = (props) => {
  return (
    <div className={cn.scoreBoard}>
      <span className={cn.scoreBoard__country}>IND</span>
      <span className={cn.scoreBoard__score}>0-0 (26.5 Ovi)</span>
      <span className={cn.scoreBoard__runRate}>Run rate: 6.5</span>
    </div>
  );
};

ScoreBoard.propTypes = {};

ScoreBoard.defaultProps = {};
