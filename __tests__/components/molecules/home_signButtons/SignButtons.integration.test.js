import 'react-native';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import React from 'react';
import {render as enzymeRender, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';
import SignButtons from '../../../../src/components/molecules/home_signButtons/signButtons';
import SignButton from '../../../../src/components/atoms/signButton/SignButton';

describe('SignButtons component', () => {
  const wrapper = mount(<SignButtons />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders 2 sign buttons', () => {
    expect(wrapper.find(SignButton).length).toEqual(2);
  });

  it('renders first button with "Sign in" text', () => {
    expect(wrapper.find(SignButton).first().prop('title')).toBe('Sign in');
  });

  it('renders second button with "Sign up" text', () => {
    expect(wrapper.find(SignButton).at(1).prop('title')).toBe('Sign up');
  });
});
