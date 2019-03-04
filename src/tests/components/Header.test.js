import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

it('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});
