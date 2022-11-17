
import AsyncStorage from "@react-native-async-storage/async-storage";
import UsuarioUtils from "../../utils/UsuarioUtils";
import api from "../api";

const PessoaService = {

  getPrincipaisInformacoesDoUsuario : async function() {
    const usuarioId =  await UsuarioUtils.getIdUsuarioDoToken()
    try {
      api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      const response = await api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      AsyncStorage.setItem("PropriedadeId", JSON.stringify(response.data.propriedades[0]))
      AsyncStorage.setItem("PessoaId", JSON.stringify(response.data.id))
      AsyncStorage.setItem("UsuarioId", JSON.stringify(response.data.usuario.id))
      AsyncStorage.setItem("Roles", JSON.stringify(response.data.usuario.roles))
      return response;
    } catch (error) {
      throw new Error("error");
      
    }
  },

};

export default PessoaService;