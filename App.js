import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/scenes/home/HomeScreen';
import SignScreen from './src/scenes/sign/SignScreen';
import StackNavigation from './src/navigations/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator headerMode={styles.navigator}>
        <StackNavigation.Screen name="Home" component={HomeScreen} />
        <StackNavigation.Screen name="Sign" component={SignScreen} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigator: {
    display: 'none',
  },
});

export default App;
