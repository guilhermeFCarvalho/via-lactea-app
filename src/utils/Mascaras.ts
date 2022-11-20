function mascaraData(data: string) {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3');
  return data;
}

function mascaraTelefone(data: string) {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{2})(\d{5})(\d)/, '($1) $2-$3');
  return data;
}

function mascaraNumero(numero: string) {
  numero = numero.replace(/\D/g, '');
  return numero;
}

function mascaraCnpj(cnpj: string) {
  return cnpj
    .replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
}

function mascaraIe(valor: string) {
  return valor.match(/.{1,3}/g).join('.');
}

function mascaraSexo(sexo: string) {
  sexo = sexo.charAt(0) + sexo.slice(1).toLowerCase();

  if (sexo === 'Femea') {
    return 'Fê' + sexo.slice(2);
  }
  return sexo;
}

export {
  mascaraSexo,
  mascaraData,
  mascaraNumero,
  mascaraCnpj,
  mascaraIe,
  mascaraTelefone,
};
