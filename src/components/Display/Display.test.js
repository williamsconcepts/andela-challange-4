import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Display from './Display';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Testing Display Component', () => {
  const results = {
    data: {},
    impact: {},
    severeImpact: {}
  };
  const formatNumber = (x) => (x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x);
  test('expect to render display correctly', () => {
    expect.assertions(1);
    expect(shallow(<Display results={results} format={formatNumber} />)).toMatchSnapshot();
  });
});
