import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Form from './Form';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe('Test Form component', () => {
  test('expect to render form component correctly', () => {
    expect.assertions(1);
    expect(shallow(<Form />)).toMatchSnapshot();
  });
});
