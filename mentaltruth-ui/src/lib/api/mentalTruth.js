import postData from './request-post';
import getData from './request-get';
import { API_URL} from './settings';

export const submit = payload => {
  const url = `${API_URL}/socialData`;
  console.log(url); //eslint-disable-line
  return postData(url, payload);
};

export const get = profileId => {
  const url = `${API_URL}/taxiProfiles/${profileId}`;
  return getData(url);
};
