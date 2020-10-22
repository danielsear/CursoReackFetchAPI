fetch("http://localhost:4000/clientes")
  .then((response) => {
    // console.log(response.json());
    return response.json();
  })
  .then((json) => {
    console.log(json);
    return json;
  });

//console.log(fetch("http://localhost:4000/clientes"));
// Template literals:  ``, utilizado para o navegar entender a junção de html e js
// ${comando js}> usado para mandar comado js dentro do Template literals

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
