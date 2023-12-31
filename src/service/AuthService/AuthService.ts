import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'native-base';
import { Login } from '../../types/Login';
import api from '../api';

const AuthService = {
  login: function (login: Login) {
    return axios
      .post(`https://via-lactea-api.herokuapp.com/api/auth/signin`, login)
      .then((response: any) => {
        AsyncStorage.setItem('Token', response.data.token);
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

export default AuthService;
