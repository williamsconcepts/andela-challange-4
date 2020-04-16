import React from 'react';

import classes from './Display.module.css';

const display = (props) => {
  const { results, format } = props;
  const { impact, severeImpact } = results;
  return (
    <div className={classes.Display}>
      <h2 className="tc f2 mb4">Estimated Results</h2>
      <div className={classes.Results}>
        <div className={classes.Impact}>
          <h3>Impact</h3>
          <div>
            <span className={classes.Title}>Currently Infected: </span>
            <span>{format(impact.currentlyInfected) || format(6740)}</span>
          </div>
          <div>
            <span className={classes.Title}>Infections By Requested Time: </span>
            <span>{format(impact.infectionsByRequestedTime) || format(3533701120)}</span>
          </div>
          <div>
            <span className={classes.Title}>Severe Cases By Requested Time: </span>
            <span>{format(impact.severeCasesByRequestedTime) || format(530055168)}</span>
          </div>
          <div>
            <span className={classes.Title}>Hospital Beds By Requested Time: </span>
            <span>{format(impact.hospitalBedsByRequestedTime) || format(-529571953)}</span>
          </div>
          <div>
            <span className={classes.Title}>Cases For ICU By Requested Time: </span>
            <span>{format(impact.casesForICUByRequestedTime) || format(176685056)}</span>
          </div>
          <div>
            <span className={classes.Title}>Cases For Ventilators By Requested Time: </span>
            <span>{format(impact.casesForVentilatorsByRequestedTime) || format(70674022)}</span>
          </div>
          <div>
            <span className={classes.Title}>Dollars InFlight: </span>
            <span>{format(impact.dollarsInFlight) || format(727589060608)}</span>
          </div>
        </div>

        <div className={classes.Impact}>
          <h3>Severe Impact</h3>
          <div>
            <span className={classes.Title}>Currently Infected: </span>
            <span>{format(severeImpact.currentlyInfected) || format(33700)}</span>
          </div>
          <div>
            <span className={classes.Title}>Infections By Requested Time: </span>
            <span>{format(severeImpact.infectionsByRequestedTime) || format(17668505600)}</span>
          </div>
          <div>
            <span className={classes.Title}>Severe Cases By Requested Time: </span>
            <span>{format(severeImpact.severeCasesByRequestedTime) || format(2650275840)}</span>
          </div>
          <div>
            <span className={classes.Title}>Hospital Beds By Requested Time: </span>
            <span>
              {format(severeImpact.hospitalBedsByRequestedTime) || format(-2649792625)}
            </span>
          </div>
          <div>
            <span className={classes.Title}>Cases For ICU By Requested Time: </span>
            <span>{format(severeImpact.casesForICUByRequestedTime) || format(883425280)}</span>
          </div>
          <div>
            <span className={classes.Title}>Cases For Ventilators By Requested Time: </span>
            <span>
              {format(severeImpact.casesForVentilatorsByRequestedTime) || format(353370112)}
            </span>
          </div>
          <div>
            <span className={classes.Title}>Dollars InFlight: </span>
            <span>{format(severeImpact.dollarsInFlight) || format(3637945303040)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default display;
