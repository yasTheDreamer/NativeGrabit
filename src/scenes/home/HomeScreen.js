import React from 'react';
import {View} from 'react-native';
import BackScene from '../../components/molecules/home_backscene/BackScene';
import Headline from '../../components/atoms/headline/Headline';
import SignButtons from '../../components/molecules/home_signButtons/signButtons';

const HomeScreen = () => {
  return (
    <View>
      <BackScene />
      <Headline />
      <SignButtons />
    </View>
  );
};

export default HomeScreen;
