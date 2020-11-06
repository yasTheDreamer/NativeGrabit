import 'react-native';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import React from 'react';

import {render as enzymeRender, shallow, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';
import BackScene from '../../../../src/components/molecules/sign_backscene/BackScene';
import Figure from '../../../../src/components/atoms/figure/Figure';

describe('Sign BackScene component', () => {
  const wrapper = mount(<BackScene />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Figure 3 times', () => {
    expect(wrapper.find(Figure).length).toEqual(2);
  });
});
