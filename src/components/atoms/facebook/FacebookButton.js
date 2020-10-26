import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const FacebookButton = (props) => {
  return (
    <LoginButton
      style={props.style}
      onLoginFinished={(err, res) => {
        if (err) {
          console.log(err);
        } else if (res.isCancelled) {
          console.log('canceled login');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log(data.accessToken.toString());
          });
        }
      }}
      onLogoutFinished={console.log('logout')}
    />
  );
};

export default FacebookButton;
