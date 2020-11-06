import 'react-native';
import 'jsdom-global/register';

import React from 'react';

import {render as enzymeRender, shallow, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';

import SignScreen from '../../../src/scenes/sign/SignScreen';
import BackScene from '../../../src/components/molecules/sign_backscene/BackScene';
import InfoOrganism from '../../../src/components/organisms/infoOrganism/InfoOrganism';
import FacebookButton from '../../../src/components/atoms/facebook/FacebookButton';

describe('Sign screen', () => {
  const wrapper = mount(<SignScreen />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  let length =
    wrapper.find(BackScene).length +
    wrapper.find(InfoOrganism).length +
    wrapper.find(FacebookButton).length;

  it('renders 3 children', () => {
    expect(length).toEqual(3);
  });
});
