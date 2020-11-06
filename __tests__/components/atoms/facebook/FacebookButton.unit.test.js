import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import FacebookButton from '../../../../src/components/atoms/facebook/FacebookButton';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('Facebook component', () => {
  const facebookButton = render(<FacebookButton />);
  it('renders correctly', () => {
    expect(facebookButton).toMatchSnapshot();
  });
});
