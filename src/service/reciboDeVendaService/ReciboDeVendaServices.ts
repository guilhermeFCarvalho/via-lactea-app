import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import api from '../api';

const ReciboDeVendaService = {
  salvar: function (data: ReciboDeVenda) {
    return api.post('/api/recibo-de-venda', data);
  },

  buscarPorPropriedade: function (id: any, data: any) {
    return api.get(`/api/recibo-de-venda/propriedade/${id}`, { params: data })
  },

  alterarStatusPagamento: function (id: any) {
    return api.put(`/api/recibo-de-venda/${id}/alterar-status-pagamento`)
  },


};

export default ReciboDeVendaService;
