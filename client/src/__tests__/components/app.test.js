import React from 'react';
import expect from 'expect';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';
import numberMocks from '../../../__mocks__/number'

const toastr = jest.genMockFromModule('toastr');

configure({ adapter: new Adapter() });
let props;


const setup = (loader) => {
	props = {
    phoneNumbers: numberMocks,
    isLoading: loader,
    handleGenerate: jest.fn(),
    onChange: jest.fn()
	};
	return shallow(<App {...props} />);
};

describe('Component: Header', () => {
  it('tests that the component successfully rendered', () => {
    const wrapper = setup();
    expect(wrapper.state().phoneNumbers.length).toBe(0);
    wrapper.instance().handleGenerate();
    expect(wrapper.state().isLoading).toBeTruthy;
    wrapper.instance().onChange();
    wrapper.instance().handleGenerate();
    wrapper.instance().componentDidMount();
    expect(wrapper.state().isLoading).toBeTruthy;
  });

    it('tests that componentDidMount is called', () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();
    expect(wrapper.state().phoneNumbers).toEqual([]);
  });
});
