import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {getUserData} from '../../../js/facebookController';

const FacebookButton = (props) => {
  return (
    <LoginButton
      style={props.style}
      permissions={['email']}
      onLoginFinished={(err, res) => {
        if (err) {
          console.log(err);
        } else if (res.isCancelled) {
          console.log('canceled login');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            getUserData(data.accessToken);
          });
        }
      }}
      onLogoutFinished={(err, res) => {
        console.log('logout');
      }}
    />
  );
};

export default FacebookButton;
