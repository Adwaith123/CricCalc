import React from 'react';

import { Banner } from './Banner';
import { TeamScoreBlock } from './TeamScoreBlock';
import { ScoreControl } from './ScoreControl';

import cn from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={cn.dashboardPage}>
      <Banner />
      <TeamScoreBlock />
      <ScoreControl />
    </div>
  );
};

Dashboard.propTypes = {};
