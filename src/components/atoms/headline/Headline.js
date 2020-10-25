import React from 'react';
import {View, Text} from 'react-native';
import styles from './headlineStyle';

const Headline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivering Everything Else</Text>
    </View>
  );
};

export default Headline;
