import React, {useState} from 'react';
import {View} from 'react-native';
import InfoBox from '../../molecules/infoBox/InfoBox';
import styles from './InfoOrganismStyle';

const InfoOrganism = () => {
  const [infos, setInfos] = useState([
    {
      icon: 'dollar-sign',
      styles: {
        container: '',
        background: '',
      },
      text: 'Share Delivery fees with other nearby clients',
      title: 'Reduced Delivery fees',
    },
    {
      icon: 'rocket',
      styles: {
        container: '',
        background: '',
      },
      text: 'We Deliver what you want in one hour',
      title: 'Delivery on time',
    },
  ]);

  return (
    <View style={styles.container}>
      {infos.map((info, i) => {
        return (
          <InfoBox
            key={i}
            icon={info.icon}
            styles={info.styles}
            text={info.text}
            title={info.title}
          />
        );
      })}
    </View>
  );
};

export default InfoOrganism;
