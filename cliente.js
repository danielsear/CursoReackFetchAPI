const infromacoesClientes = [
  {
    cpf: 105402105,
    nome: "daniel",
  },
  {
    cpf: 10544502105,
    nome: "sophia",
  },
];

// template literos:  ``, utilizado para o navegar entender a junção de html e js
// ${comando js}> usado para mandar comado js dentro do literos

//console.log(conteudoLinha);
const exibeCliente = (cpf, nome) => {
  const linha = document.createElement("tr");

  const conteudoLinha = ` <td>${cpf}</td>
      <td>${nome}</td>`;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");
// a propriedade date-... > é usada para manipular js dentro do html
//console.log(corpoTabela);
//appendChild= anexar um filho
infromacoesClientes.forEach((indice) => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});
