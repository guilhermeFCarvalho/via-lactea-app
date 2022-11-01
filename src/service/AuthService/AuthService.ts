
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Login } from "../../types/Login";
import api from "../api";

const AuthService = {

  login : function(login:Login) {
      api.post(`/api/auth/signin`, login)
      .then((response:any) => {
        AsyncStorage.setItem('Token', response.data.token)
      })
  },




};

export default AuthService;