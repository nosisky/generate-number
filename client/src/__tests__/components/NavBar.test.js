import React from 'react';
import expect from 'expect';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../../components/includes/NavBar';

configure({ adapter: new Adapter() });

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = mount(<NavBar />);
    expect(wrapper.find('nav').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('span').length).toBe(2);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('a').length).toBe(3);
    expect(wrapper.find('button').length).toBe(1);
  });
});