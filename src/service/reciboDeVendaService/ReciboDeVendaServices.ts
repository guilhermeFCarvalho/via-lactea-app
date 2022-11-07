
import { ReciboDeVenda } from "../../types/ReciboDeVenda";
import api from "../api";

const ReciboDeVendaService = {

  salvar : function(data:ReciboDeVenda) {
    return api.post('/api/recibo-de-venda',data)
  },

  buscar : function(data:any) {
    return api.get('/api/recibo-de-venda?page=0&size=30&sort=dataDaVenda,asc&sort=id,asc')
  }




};

export default ReciboDeVendaService;