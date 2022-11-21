import api from '../api';

const AnimalService = {
  listarAnimaisPorFazenda: function (id: string) {
    return api
      .get('/api/animais/fazenda/' + id)
      .catch((error) => console.log(error));
  },

  salvar: function (data: object) {
    return api.post('/api/animais', data).catch((error) => console.log(error));
  },
};

export default AnimalService;
