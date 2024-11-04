import axios from 'axios'
import Cookies from 'universal-cookie';
import config from './Config';





const cookies = new Cookies();


const AxiosConfig = axios.create({
    baseURL: config.apiBaseUrl,
headers: {
  'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
}
})

AxiosConfig.interceptors.request.use(
  (config) => {
      const token = cookies.get('token');
      console.log("token Bearer",token)
      if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
  },
  (error) => {
      return Promise.reject(error);
      
  }
);
export default AxiosConfig;




