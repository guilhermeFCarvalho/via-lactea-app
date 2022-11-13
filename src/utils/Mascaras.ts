function mascaraData(data: string) {
  data = data.replace(/\D/g, '');
  data = data.replace(/^(\d{2})(\d{2})(\d)/, "$1/$2/$3");
  return data
}

function mascaraPeso(peso: string) {
  peso = peso.replace(/\D/g, '');
  return peso
}

export { mascaraData, mascaraPeso };
