
import UsuarioUtils from "../../utils/UsuarioUtils";
import api from "../api";

const PessoaService = {


  

  getPrincipaisInformacoesDoUsuario : async function() {
    const usuarioId =  await UsuarioUtils.getIdUsuarioDoToken()
    api.get(`/api/pessoas-fisicas/usuario/${usuarioId}`)
      .then((response:any) => {
        console.log(response);
      })
  },

};

export default PessoaService;