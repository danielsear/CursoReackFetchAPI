const infromacoesClientes = [
  {
    cpf: 105402105,
    nome: "daniel",
  },
];

const conteudoLinha = `<tr>
<td>${infromacoesClientes[0].cpf}</td>
<td>${infromacoesClientes[0].nome}</td>
<td></td>
</tr>;`;
// template literos:  ``, utilizado para o navegar entender a junção de html e js
// ${comando js}> usado para mandar comado js dentro do literos

//console.log(conteudoLinha);

const corpoTabela = document.querySelector("[data-conteudo-tabela]");
// a propriedade date-... > é usada para manipular js dentro do html
//console.log(corpoTabela);
corpoTabela.innerHTML = conteudoLinha;
