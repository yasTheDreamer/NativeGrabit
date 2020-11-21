import 'react-native';
import 'jsdom-global/register';
import React from 'react';

import {render as enzymeRender, shallow, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';
import InfoBox from '../../../../src/components/molecules/infoBox/InfoBox';
import IconImage from '../../../../src/components/atoms/iconImage/IconImage';
import InfoHeader from '../../../../src/components/atoms/infoHeader/InfoHeader';
import InfoText from '../../../../src/components/atoms/infoText/InfoText';
import {View} from 'react-native';

describe('InfoBox component', () => {
  const wrapper = mount(<InfoBox />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  let length =
    wrapper.find(IconImage).length +
    wrapper.find(InfoHeader).length +
    wrapper.find(InfoText).length;

  it('has 3 child components ', () => {
    expect(length).toEqual(3);
  });
});
