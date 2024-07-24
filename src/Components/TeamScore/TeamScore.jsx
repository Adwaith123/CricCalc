import React from 'react';
import cns from 'classnames';
import PropTypes from 'prop-types';

import cn from './TeamScore.module.scss';

export const TeamScore = (props) => {
  return (
    <div className={cns(cn.teamScore, props.className)}>
      <div className={cn.teamScore__labelBlock}>
        <span></span>
        <span>{props.teamName}</span>
      </div>
      <div className={cn.teamScore__scores}>
        <section>
          <span>R</span>
          <span>{props.runs ?? 0}</span>
        </section>
        <section>
          <span>B</span>
          <span>{props.bowls ?? 0}</span>
        </section>
        <section>
          <span>4&apos;s</span>
          <span>{props.four ?? 0}</span>
        </section>
        <section>
          <span>6&apos;s</span>
          <span>{props.six ?? 0}</span>
        </section>
      </div>
    </div>
  );
};

TeamScore.propTypes = {
  className: PropTypes.string,
  teamName: PropTypes.string,
  runs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bowls: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  four: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  six: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
