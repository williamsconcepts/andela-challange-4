import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Display from '../../components/Display/Display';

import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: true,
      data: {
        region: {
          name: null,
          avgAge: null,
          avgDailyIncomeInUSD: null,
          avgDailyIncomePopulation: null
        },
        periodType: null,
        timeToElapse: null,
        reportedCases: null,
        population: null,
        totalHospitalBeds: null
      },
      results: {
        data: {},
        impact: {},
        severeImpact: {}
      }
    };
  }

  // eslint-disable-next-line class-methods-use-this
  getInputValues(event) {
    const name = event.target.getAttribute('name');
    const value = Number.parseFloat(event.target.value) || event.target.value;
    return { name, value };
  }

  formatNumber = (x) => (x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x);

  regionalInputHandler = (event) => {
    const { name, value } = this.getInputValues(event);
    this.setState((prevState) => {
      let { data } = prevState;
      let { region } = data;
      region = { ...region, ...{ [name]: value } };
      data = { ...data, region };
      return { data };
    });
  };
  // /^\d*\.?(?:\d{1,})?$/

  otherInputHandler = (event) => {
    const { name, value } = this.getInputValues(event);
    this.setState((prevState) => {
      let { data } = prevState;
      data = { ...data, ...{ [name]: value } };
      return { data };
    });
  };

  estimate = () => {
    this.setState({ input: false });
  }

  render() {
    const { input } = this.state;
    const { results } = this.state;
    const output = input ? (
      <Form
        regionDataChanged={this.regionalInputHandler}
        otherInputChanged={this.otherInputHandler}
        clicked={this.estimate}
      />
    ) : (
      <Display format={this.formatNumber} results={results} />
    );
    return (
      <div className={classes.App}>
        <Header heading={classes.Heading} />
        {output}
      </div>
    );
  }
}

export default App;
