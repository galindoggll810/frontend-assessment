import axios from 'axios';

// create new instance
const Http = axios.create();

// set default connect
Http.defaults.baseURL = process.env.REACT_APP_API_URL;
Http.defaults.headers.common.Accept = 'application/json';

/**
 * intercept the response so we can handle the
 * expected exceptions from the API
 */
Http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    /**
     * This could be a CORS issue or
     * a dropped internet connection.
     */
    if (typeof error.response === 'undefined') {
      return alert('A network error occurred.');
    }

    return Promise.reject(error);
  },
);

export default Http;