import React from 'react';

import classes from './Form.module.css';

const form = (props) => {
  const { regionDataChanged, otherInputChanged, clicked } = props;
  return (
    <div className={classes.Form}>
      <h2 className="tc f2">Enter Data</h2>
      <form className="MyForm">
        <div className="div">
          <div>
            <label htmlFor="regionName">Region Name</label>
            <input
              onChange={regionDataChanged}
              required
              data-region-name
              type="text"
              name="name"
              id="regionName"
              placeholder="Example... Africa"
            />
          </div>
          <div>
            <label htmlFor="avgAge">Average Age</label>
            <input
              onChange={regionDataChanged}
              required
              data-avg-age
              type="text"
              name="avgAge"
              id="avgAge"
              placeholder="Example... 19.7"
            />
          </div>
          <div>
            <label htmlFor="avgDailyIncomeInUSD">Average Daily Income In US Dollar</label>
            <input
              onChange={regionDataChanged}
              required
              data-avg-daily-income-in-usd
              type="text"
              name="avgDailyIncomeInUSD"
              id="avgDailyIncomeInUSD"
              placeholder="Example... 5"
            />
          </div>
          <div>
            <label htmlFor="avgDailyIncomePopulation">
              Average Daily Income Population
            </label>
            <input
              onChange={regionDataChanged}
              required
              data-avg-daily-income-population
              type="text"
              name="avgDailyIncomePopulation"
              id="avgDailyIncomePopulation"
              placeholder="Example... 0.71"
            />
          </div>
          <div>
            <label htmlFor="population">Population</label>
            <input
              onChange={otherInputChanged}
              required
              data-population
              type="text"
              name="population"
              id="population"
              placeholder="Example... 66622705"
            />
          </div>
          <div>
            <label htmlFor="timeToElapse">Time to elapse</label>
            <input
              onChange={otherInputChanged}
              required
              data-time-to-elapse
              type="text"
              name="timeToElapse"
              id="timeToElapse"
              placeholder="Example... 58"
            />
          </div>
          <div>
            <label htmlFor="reportedCases">Reported Cases</label>
            <input
              onChange={otherInputChanged}
              required
              data-reported-cases
              type="text"
              name="reportedCases"
              placeholder="Example... 674"
              id="reportedCases"
            />
          </div>
          <div>
            <label htmlFor="totalHospitalBeds">Total Hospital Beds</label>
            <input
              onChange={otherInputChanged}
              required
              data-total-hospital-beds
              type="text"
              name="totalHospitalBeds"
              placeholder="Example... 1380614"
              id="totalHospitalBeds"
            />
          </div>
          <div className="selection">
            <label htmlFor="periodType">Period Type</label>
            <select
              onChange={otherInputChanged}
              required
              data-period-type
              name="periodType"
              id="periodType"
            >
              <option defaultValue value={null}>
                Select Period Type
              </option>
              <option value="days">days</option>
              <option value="weeks">weeks</option>
              <option value="months">months</option>
            </select>
          </div>
        </div>
        <input onClick={clicked} data-go-estimate type="submit" value="Estimate" />
      </form>
    </div>
  );
};

export default form;
