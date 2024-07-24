import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import cn from './LabelValue.module.scss';

export const LabelValue = (props) => {
  return (
    <div className={cns(cn.labelValue, props.className)}>
      <span className={cn.labelValue__label}>{props.label}</span>
      <span className={cn.labelValue__value}>{props.value}</span>
    </div>
  );
};

LabelValue.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
};
