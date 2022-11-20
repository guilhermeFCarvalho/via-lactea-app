import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import api from '../api';

const ReciboDeVendaService = {
  salvar: function (data: ReciboDeVenda) {
    return api.post('/api/recibo-de-venda', data);
  },

  buscarPorPropriedade: function (id: any, data: any) {
    return api.get(`/api/recibo-de-venda/propriedade/${id}`, { params: data });
  },

  buscarUltimaVendaPorPropriedade: function (id: any) {
    return api.get(`/api/recibo-de-venda/propriedade/${id}/ultimo-registro`);
  },
};

export default ReciboDeVendaService;
