import 'react-native';
import React from 'react';

import {render as enzymeRender, shallow, ShallowWrapper} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';
import SignButton from '../../../../src/components/atoms/signButton/SignButton';
import {TouchableOpacity} from 'react-native';

describe('SignButton component', () => {
  const createTestProps = (props) => ({
    nav: {
      navigate: jest.fn(),
    },

    style: {
      button: {},
    },
    ...props,
  });

  let props = createTestProps({});
  let wrapper = shallow(<SignButton {...props} />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has been called with SignScreen after click', () => {
    //simulate is deprecated
    wrapper.find(TouchableOpacity).prop('onPress')();
    expect(props.nav.navigate).toHaveBeenCalledWith('Sign');
  });
});
