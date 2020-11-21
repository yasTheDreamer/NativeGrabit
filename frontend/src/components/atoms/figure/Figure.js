import React from 'react';
import {View, Image} from 'react-native';

const Figure = (props) => {
  return (
    <View style={props.styles.container}>
      <Image style={props.styles.background} source={props.image}></Image>
    </View>
  );
};

export default Figure;
