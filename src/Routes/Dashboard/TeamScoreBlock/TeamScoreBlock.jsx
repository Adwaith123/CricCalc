import React from 'react';
import PropTypes from 'prop-types';

import { TeamScore } from '../../../Components/TeamScore';
import { Extras } from './Extras';

import cn from './TeamScoreBlock.module.scss';

export const TeamScoreBlock = (props) => {
  return (
    <div className={cn.teamScore}>
      <div className={cn.teamScore__inner}>
        <div>
          <TeamScore teamName='India' />
        </div>
        <Extras />
        <TeamScore teamName='India' />
      </div>
    </div>
  );
};

TeamScoreBlock.propTypes = {};
