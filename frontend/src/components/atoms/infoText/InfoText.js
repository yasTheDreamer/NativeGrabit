import React from 'react';
import {Text} from 'react-native';
import styles from './InfoTextStyle';

const InfoText = (props) => {
  return <Text style={styles.text}>{props.text}</Text>;
};

export default InfoText;
