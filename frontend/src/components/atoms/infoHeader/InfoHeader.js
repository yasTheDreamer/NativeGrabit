import React from 'react';
import {View, Text} from 'react-native';
import styles from './InfoHeaderStyle';

const InfoHeader = (props) => {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.line}></View>
    </>
  );
};

export default InfoHeader;
