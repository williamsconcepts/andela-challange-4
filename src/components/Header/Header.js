import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
  const { heading } = props;
  return (
    <div className={`${classes.Header} tc`}>
      <h1 className={heading}>ESTIMATOR</h1>
    </div>
  );
};

export default header;
