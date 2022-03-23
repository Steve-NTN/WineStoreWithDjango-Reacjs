import axios from 'axios';
import configs from '../configs';

const apiTemplate = (endpoint, method='GET', data, handleSuccess, handleFail) => {
  (method === 'POST'? axios.post(`${configs.DOMAIN}${endpoint}`, data):
  axios.get(`${configs.DOMAIN}${endpoint}`, data))
  .then(res => {
    handleSuccess(res.data);
  })
  .catch(error => {
    handleFail(error)
  })
}

export default apiTemplate;