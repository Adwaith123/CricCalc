import React from 'react';
import PropTypes from 'prop-types';

import { ScoreBoard } from './ScoreBoard';

import cn from './Banner.module.scss';

export const Banner = (props) => {
  return (
    <div className={cn.banner}>
      <div className={cn.banner__inner}>
        <ScoreBoard />
      </div>
    </div>
  );
};

Banner.propTypes = {};
