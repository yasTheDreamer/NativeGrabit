import 'react-native';
import React from 'react';

import {render} from '@testing-library/react-native';
import {shallow} from 'enzyme';
import Headline from '../../../../src/components/atoms/headline/Headline';
import {Text} from 'react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Headline Componenent', () => {
  const headline = shallow(<Headline />);

  const text = 'Delivering Everything Else';

  it('renders correctly', () => {
    expect(headline.find(Text).children().text()).toBe(text);
  });
});
