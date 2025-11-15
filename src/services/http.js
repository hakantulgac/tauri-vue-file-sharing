import axios from "axios";

const http = {
  get: (url, params) => {
    return axios.get(url, params);
  },
  post(url, body) {
    return axios.post(url, body);
  },
  put(url, data) {
    return axios.put(url, data);
  },
  delete(url) {
    return axios.delete(url);
  },
};

export default http;
