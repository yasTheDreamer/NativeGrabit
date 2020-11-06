/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from '../src/navigations/StackNavigation';
import HomeScreen from '../src/scenes/home/HomeScreen';
import SignScreen from '../src/scenes/sign/SignScreen';
import {render} from '@testing-library/react-native';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// it('renders correctly', async () => {
//   const result = renderer.create(<App />);

//   await act(async () => {
//     expect(result).toMatchSnapshot();
//   });
// });

describe('App component', () => {
  const app = renderer.create(<App />).toJSON();
  const appRender = render(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('has only one child', () => {
    expect(app.children.length).toBe(1);
  });

  it('renders headline', () => {
    expect(appRender.findByText('Delivering Everything Else')).toBeTruthy();
  });

  describe('NavigatorContainer component', () => {
    const navigationContainer = renderer
      .create(
        <NavigationContainer testID="navigationContainer">
          <StackNavigation.Navigator
            testID="stackNavigator"
            headerMode={{display: 'none'}}>
            <StackNavigation.Screen name="Home" component={HomeScreen} />
            <StackNavigation.Screen name="Sign" component={SignScreen} />
          </StackNavigation.Navigator>
        </NavigationContainer>,
      )
      .toJSON();

    it('renders correctly', () => {
      expect(navigationContainer).toMatchSnapshot();
    });

    it('has only one child', () => {
      expect(navigationContainer.children.length).toBe(1);
    });


    

  });
});
