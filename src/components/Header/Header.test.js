import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Header from './Header';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Test Header Component', () => {
  test('expect to render Header correctly', () => {
    expect.assertions(1);
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
