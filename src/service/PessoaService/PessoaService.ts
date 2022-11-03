
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioUtils from "../../utils/UsuarioUtils";
import api from "../api";

const PessoaService = {


  

  getPrincipaisInformacoesDoUsuario : async function() {
    const usuarioId =  await UsuarioUtils.getIdUsuarioDoToken()
    api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      .then((response:any) => {
        AsyncStorage.setItem("Fazenda", response.data.propriedades[0].fazenda.nomeDaFazenda)
        AsyncStorage.setItem("Roles", response.data.usuario.roles)
      })
  },

};

export default PessoaService;