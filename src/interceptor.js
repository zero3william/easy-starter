import axios from 'axios';
import Promise from 'promise';

let http = axios.create({
  baseURL: 'localhost',
  transformRequest: [
    function(json_obj) {
      var form_data = new FormData();
      for (var key in json_obj) {
        form_data.append(key, json_obj[key]);
      }
      return form_data;
    }
  ]
});

// http.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

http.interceptors.response.use(resp => {
  if (resp.data.status.code !== '0') {
    alert(resp.data.status.message);
    return Promise.reject(resp.data.status);
  }
  return resp.data.data;
});

export default http;
