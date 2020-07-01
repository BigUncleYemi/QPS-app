// apiUtils.js
import axios from 'axios';
import handleError from './handleError';
import {config} from './config';

const SERVER_DOMAIN = config.apiUrl;

axios.defaults.baseURL = SERVER_DOMAIN;

function getHeaders() {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem(tokenValue)}`,
    },
  };
}
// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP PUT Request - Returns Resolved or Rejected Promise
export const put = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${path}`, data, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = path => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${path}`, getHeaders())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(handleError(error));
      });
  });
};
