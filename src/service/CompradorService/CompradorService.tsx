import api from '../api';

const CompradorService = {
  salvar: function (data: object) {
    return api
      .post('/api/pessoas-juridicas', data)
      .catch((error) => console.log(error));
  },

  listar: function () {
    return api
      .get('/api/pessoas-juridicas')
      .catch((error) => console.log(error));
  },
};

export default CompradorService;
