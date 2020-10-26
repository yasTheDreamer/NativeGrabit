import React from 'react';
import {View, StyleSheet} from 'react-native';
import BackScene from '../../components/molecules/sign_backscene/BackScene';
import InfoOrganism from '../../components/organisms/infoOrganism/InfoOrganism';
import FacebookButton from '../../components/atoms/facebook/FacebookButton';

const SignScreen = () => {
  return (
    <View style={styles.container}>
      <BackScene />
      <InfoOrganism />
      <FacebookButton style={styles.facebookButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  facebookButton: {
    flexDirection: 'row',
    width: 300,
    height: 40,
  },
});

export default SignScreen;
