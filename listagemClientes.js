//console.log(fetch("http://localhost:4000/clientes"));
// Template literals:  ``, utilizado para o navegar entender a junção de html e js
// ${comando js}> usado para mandar comado js dentro do Template literals
//console.log(conteudoLinha);

const removeCliente = (id) => {
  if (confirm("Deseja deletar o cliente?")) {
    deleteCliente(id);
  }
};

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");

  const conteudoLinha = ` <td>${cpf}</td>
      <td>${nome}</td>
      <button type='button'class='btn btn-danger'
       onclick='removeCliente(${id})' >Delete</button>
      `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");
// a propriedade date-... > é usada para manipular js dentro do html
//console.log(corpoTabela);
//appendChild= anexar um filho
listarClientes().then((exibe) => {
  exibe.forEach((indice) => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  });
});
