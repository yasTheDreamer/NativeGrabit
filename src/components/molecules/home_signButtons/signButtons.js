import React, {useState} from 'react';
import {View} from 'react-native';
import SignButton from '../../atoms/signButton/SignButton';
import styles from './signButtonsStyle';

const signButtons = (props) => {
  const [buttons, setButtons] = useState([
    {
      title: 'Sign in',
    },
    {
      title: 'Sign up',
    },
  ]);

  return (
    <View style={styles.container}>
      {buttons.map((button, i) => {
        return (
          <SignButton
            key={i}
            title={button.title}
            style={styles}
            nav={props.nav}
          />
        );
      })}
    </View>
  );
};

export default signButtons;
