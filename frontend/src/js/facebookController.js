import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';

export const getUserData = (accesstoken) => {
  let req = new GraphRequest(
    '/me',
    {
      httpMethod: 'GET',
      version: 'v2.5',
      accessToken: accesstoken,
      parameters: {
        fields: {
          string: 'email,name,id,picture',
        },
      },
    },
    (err, res) => {
      console.log(err, res);
    },
  );

  new GraphRequestManager().addRequest(req).start();
};
