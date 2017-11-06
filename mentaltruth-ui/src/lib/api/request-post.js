import checkStatus from './check-status';
import requestHeaders from './request-header';

const postData = (url, payload) => {

  const options = {
    method: 'POST',
    headers: requestHeaders(),
    body: JSON.stringify(payload)
  };

  return fetch(url, options)
    .then(checkStatus.status)
    .then(response => response.json())
    .catch(e => e);
};

export default postData;
