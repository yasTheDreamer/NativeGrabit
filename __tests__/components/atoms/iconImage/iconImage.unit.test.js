import 'react-native';
import React from 'react';

import {View, Text} from 'react-native';
import '@testing-library/jest-native';
import renderer from 'react-test-renderer';
import IconImage from '../../../../src/components/atoms/iconImage/IconImage';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {shallow, mount, render} from 'enzyme';

describe('IconImage component', () => {
  const wrapper = shallow(<IconImage icon="amazon" />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a valid icon', () => {
    expect(wrapper.find(Icon).props()).toHaveProperty('name', 'amazon');
  });
});
