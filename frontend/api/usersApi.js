import {SAVE_CUSTOMER, SAVE_COURIER} from '../utils/env';
import {fetchData} from '../utils/requests';

export const saveUser = (data) => {
  let url = null;
  switch (data.type) {
    case 1:
      url = SAVE_CUSTOMER;
      break;
    case 2:
      url = SAVE_COURIER;
      break;
  }

  if (url) fetchData(url, data);
  else throw Error('url is not defined');
};
