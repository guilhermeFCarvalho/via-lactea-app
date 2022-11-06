
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioUtils from "../../utils/UsuarioUtils";
import api from "../api";

const PessoaService = {


  

  getPrincipaisInformacoesDoUsuario : async function() {
    const usuarioId =  await UsuarioUtils.getIdUsuarioDoToken()
    api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      .then((response:any) => {
        AsyncStorage.setItem("FazendaId", response.data.propriedades[0].fazenda.id)
        AsyncStorage.setItem("PessoaId", response.data.id)
        AsyncStorage.setItem("UsuarioId", response.data.usuario.id)
        AsyncStorage.setItem("Roles", response.data.usuario.roles)
      })
  },

};

export default PessoaService;