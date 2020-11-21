import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const SignButton = (props) => {
  return (
    <TouchableOpacity
      style={props.style.button}
      onPress={() => {
        props.nav.navigate('Sign');
      }}>
      <Text style={props.style.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
