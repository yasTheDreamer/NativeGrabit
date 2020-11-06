import 'react-native';
import 'jsdom-global/register';

import React from 'react';

import {render as enzymeRender, shallow, mount} from 'enzyme';
import {render as reactRender} from '@testing-library/react-native';

import InfoOrganism from '../../../../src/components/organisms/infoOrganism/InfoOrganism';
import InfoBox from '../../../../src/components/molecules/infoBox/InfoBox';

describe('InfoOrganism component', () => {
  const infoOrganism = mount(<InfoOrganism />);

  it('renders correctly', () => {
    expect(infoOrganism).toMatchSnapshot();
  });

  it('renders 3 InfoBox components', () => {
    expect(infoOrganism.find(InfoBox).length).toEqual(2);
  });
});
