import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const SignButton = (props) => {
  return (
    <TouchableOpacity style={props.style.button}>
      <Text style={props.style.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default SignButton;
