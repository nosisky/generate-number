import React from 'react';
import expect from 'expect';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {reSort} from '../../helpers/helpers'

configure({ adapter: new Adapter() });

describe('Component: Header', () => {
  it('tests that numbers are sorted in ascending order', () => {
    const sorter = reSort([{
      phoneNumber: '2'
    },
    {
      phoneNumber: '1'
    }], 'Ascending');
    expect(sorter[0].phoneNumber).toBe('1');
  });

    it('tests that numbers are sorted in descending order', () => {
    const sorter = reSort([{
      phoneNumber: '2'
    },
    {
      phoneNumber: '1'
    }], 'Descending');
    expect(sorter[0].phoneNumber).toBe('2');
  });
});