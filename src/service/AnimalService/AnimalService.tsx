import api from '../api';

const AnimalService = {
  salvar: function (data: object) {
    return api.post('/api/animais', data).catch((error) => console.log(error));
  },
};

export default AnimalService;
