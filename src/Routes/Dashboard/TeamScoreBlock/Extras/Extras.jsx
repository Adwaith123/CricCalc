import React from 'react';
import PropTypes from 'prop-types';

import cn from './Extras.module.scss';
import { LabelValue } from '../../../../Components/LabelValue';

export const Extras = (props) => {
  return (
    <div className={cn.extraScoreBlock}>
      <LabelValue label="Partnership" value={150} /> 
      <LabelValue label="Extras" value={3} /> 
    </div>
  );
};

Extras.propTypes = {};

Extras.defaultProps = {};
