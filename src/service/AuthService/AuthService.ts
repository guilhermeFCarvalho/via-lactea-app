
import { Login } from "../../types/Login";
import { ReciboDeVenda } from "../../types/ReciboDeVenda";
import api from "../api";

const AuthService = {

  login : function(login:Login) {
      api.post(`/api/auth/signin`, login)
      .then((response:any) => {
        localStorage.setItem('token', response.data.token)
      })
        
  },




};

export default AuthService;