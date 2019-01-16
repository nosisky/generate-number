import React from 'react';
import expect from 'expect';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberTable from '../../components/includes/NumberTable';
import numberMocks from '../../../__mocks__/number'

configure({ adapter: new Adapter() });
let props;
const setup = (loader) => {
	props = {
    phoneNumbers: numberMocks,
    isLoading: loader,
    handleGenerate: jest.fn(),
    onChange: jest.fn()
	};
	return mount(<NumberTable {...props} />);
};

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = setup(false);
    expect(wrapper.find('div').length).toBe(4);
    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('td').length).toBe(6);
    expect(wrapper.find('th').length).toBe(6);
    expect(wrapper.find('select').length).toBe(1);
  });

  it('tests that preloader is working', () => {
    const wrapper = setup(true);
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('span').length).toBe(3);
  });

    it('tests that onChange is working', () => {
    const wrapper = setup(false);
    wrapper.find('select').simulate('change', { target: { value : 'Ascending'}});

    expect(wrapper.onChange).toHaveBeenCalled;
  });
});
