function mascaraData(data: string) {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3');
  return data;
}

function mascaraNumero(numero: string) {
  numero = numero.replace(/\D/g, '');
  return numero;
}

export { mascaraData, mascaraNumero };
