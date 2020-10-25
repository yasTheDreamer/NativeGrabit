import React from 'react';
import {View, Text} from 'react-native';
import BackScene from '../../components/molecules/home_backscene/BackScene';
import Headline from '../../components/atoms/headline/Headline';
import SignButtons from '../../components/molecules/home_signButtons/signButtons';

const Home = () => {
  return (
    <View>
      <BackScene />
      <Headline />
      <SignButtons />
    </View>
  );
};

export default Home;
