function validarData(data: string) {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (data.match(regex) === null) {
    return false;
  }

  const [dia, mes, ano] = data.split('/');
  const isoFormatacaoData = `${ano}-${mes}-${dia}`;
  const dataFormatada = new Date(isoFormatacaoData);
  const timestamp = dataFormatada.getTime();

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false;
  }

  return dataFormatada.toISOString().startsWith(isoFormatacaoData);
}

export { validarData };
