import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import App from './App';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('App Component Snapshot', () => {
  test('', () => {
    expect.assertions(1);
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
