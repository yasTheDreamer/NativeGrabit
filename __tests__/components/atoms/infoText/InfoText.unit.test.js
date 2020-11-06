import 'react-native';
import React from 'react';

import {render as enzymeRender, shallow} from 'enzyme';
import InfoText from '../../../../src/components/atoms/infoText/InfoText';
import {Text, View} from 'react-native';
import {render as reactNativeRender} from '@testing-library/react-native';

describe('InfoText component', () => {
  const wrapper = shallow(<InfoText text="test" />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays the text properly', () => {
    const {getByText} = reactNativeRender(<InfoText text="test" />);
    expect(getByText('test')).toBeTruthy();
  });
});
