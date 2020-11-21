import React from 'react';
import {View} from 'react-native';
import InfoText from '../../atoms/infoText/InfoText';
import IconImage from '../../atoms/iconImage/IconImage';
import InfoHeader from '../../atoms/infoHeader/InfoHeader';
import styles from './InfoBoxStyle';

const InfoBox = (props) => {
  return (
    <View style={styles.container}>
      <IconImage icon={props.icon} />
      <InfoHeader title={props.title} />
      <InfoText text={props.text} />
    </View>
  );
};

export default InfoBox;
