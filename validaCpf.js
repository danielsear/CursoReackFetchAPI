function verificaCpfInvalido(cpf) {
  const cpfsInvalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "00000000000",
  ];
  //console.log(cpfsInvalidos.indexOf(cpf) === -1);
  return cpfsInvalidos.indexOf(cpf) === -1; //pq não entrou no array
}

function somaNumeroCpf(cpf, totalDigitos, peso) {
  let soma = 0;
  for (let indice = 0; indice <= totalDigitos; indice++) {
    soma += parseInt(cpf.substring(indice - 1, indice) * (peso - indice));
  }
  return soma;
}

function verificaDigito(cpf, totalDigitos, peso, digitoDeVerificacao) {
  const soma = somaNumeroCpf(cpf, totalDigitos, peso);
  const resto = (soma * 10) % 11;
  return resto === digitoDeVerificacao;
}

function verificaPrimeiroDigito(cpf) {
  const peso = 11;
  const totalDigitosPrimeiro = 9;
  const digitoDeVerificacao = parseInt(cpf.substring(9, 10));
  return verificaDigito(cpf, totalDigitosPrimeiro, peso, digitoDeVerificacao);
}

//console.log(verificaPrimeiroDigito("18875539081"));

function verificaSegundoDigito(cpf) {
  const peso = 12;
  const totalDigitosSegundo = 10;
  const digitoDeVerificacao = parseInt(cpf.substring(10, 11));
  return verificaDigito(cpf, totalDigitosSegundo, peso, digitoDeVerificacao);
}

//console.log(verificaSegundoDigito("18875539081"));

function validaCpf(cpf) {
  return (
    verificaPrimeiroDigito(cpf) &&
    verificaSegundoDigito(cpf) &&
    verificaCpfInvalido(cpf)
  );
}
