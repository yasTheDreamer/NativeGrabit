import 'react-native';
import React from 'react';

import {render as enzymeRender, shallow} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';
import InfoHeader from '../../../../src/components/atoms/infoHeader/InfoHeader';

describe('InfoHeader component', () => {
  const wrapper = shallow(<InfoHeader title="test" />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with the right title', () => {
    const {getByText} = reactRender(<InfoHeader title="test" />);

    expect(getByText('test')).toBeTruthy();
  });
});
