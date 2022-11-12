
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioUtils from "../../utils/UsuarioUtils";
import api from "../api";

const PessoaService = {


  

  getPrincipaisInformacoesDoUsuario : async function() {
    const usuarioId =  await UsuarioUtils.getIdUsuarioDoToken()
    api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      .then((response:any) => {
        AsyncStorage.setItem("FazendaId", JSON.stringify(response.data.propriedades[0].fazenda.id))
        AsyncStorage.setItem("PessoaId", JSON.stringify(response.data.id))
        AsyncStorage.setItem("UsuarioId", JSON.stringify(response.data.usuario.id))
        AsyncStorage.setItem("Roles", JSON.stringify(response.data.usuario.roles))
      }).catch((erro)=> {
        throw new Error(erro)
      })
  },

};

export default PessoaService;