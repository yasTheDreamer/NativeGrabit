import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/scenes/home/HomeScreen';
import SignScreen from './src/scenes/sign/SignScreen';
import StackNavigation from './src/navigations/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Context from './services/Context';
import CustomerService from './services/CustomerService';
import CourierService from './services/CourierService';
import Customer from './models/Customer';
import Courier from './models/Courier';

const App = () => {
  const context = new Context(new CustomerService());
  const customer = new Customer()
    .withEmail('yassine')
    .withFullName('yassine yousfi')
    .build();
  context.executeSaveUser(customer);

  // context = new Context(new CourierService());
  // const courier = new Courier()
  //   .withEmail('anouar')
  //   .withFullName('anouar yousfi')
  //   .build();
  // context.executeSaveUser(courier);

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
