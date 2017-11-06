import checkStatus from './check-status';
import requestHeaders from './request-header';

const getData = (url) => {

  const options = {
    method: 'GET',
    headers: requestHeaders()
  };

  return fetch(url, options)
      .then(checkStatus.status)
      .then(response => response.json())
      .catch(e => e);
};

export default getData;
