import 'react-native';
import 'jsdom-global/register';

import React from 'react';

import {render as enzymeRender, shallow, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';

import HomeScreen from '../../../src/scenes/home/HomeScreen';
import BackScene from '../../../src/components/molecules/home_backscene/BackScene';
import Headline from '../../../src/components/atoms/headline/Headline';
import SignButtons from '../../../src/components/molecules/home_signButtons/signButtons';

describe('Home Screen', () => {
  const wrapper = mount(<HomeScreen />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  let length =
    wrapper.find(BackScene).length +
    wrapper.find(Headline).length +
    wrapper.find(SignButtons).length;

  it('renders 3 child components', () => {
    expect(length).toBe(3);
  });
});
