import React from 'react';
import expect from 'expect';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../../routes/Main';
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
	return mount(<Main {...props} />);
};

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = setup();
    expect(wrapper.find('nav').length).toBe(1);
  });
});