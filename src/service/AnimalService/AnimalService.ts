import api from '../api';

const AnimalService = {
 

  listarAnimaisPorFazenda: function (id: string) {
    return api
      .get('/api/animais/fazenda/' + id)
      .catch((error) => console.log(error));
  },
};

export default AnimalService;
