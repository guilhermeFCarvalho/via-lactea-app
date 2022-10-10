


import api from "../api";
 
const UsuarioService = {

  salvar : function(data:object) {
    return api.post('/pessoas-fisicas',data).catch(error => console.log(error));
  },






};

export default UsuarioService;
