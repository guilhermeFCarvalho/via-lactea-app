
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Login } from "../../types/Login";
import api from "../api";

const AuthService = {

  login : function(login:Login) {
      axios.post(`http://127.0.0.1:8080/api/auth/signin`, login)
      .then((response:any) => {
        AsyncStorage.setItem('Token', response.data.token)
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
      }).catch(error => console.log(error));
  },
};

export default AuthService;