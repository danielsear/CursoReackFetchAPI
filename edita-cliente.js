const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get("id");
/*
    criamos um novo objeto URL que é capaz de nos dizer qual
     o endereço da página que estamos. Por meio da propriedade 
     searchParams conseguimos acessar o método get e selecionar 
     o id que vemos na url.
*/

const inputCpf = document.querySelector("[data-cpf]");
const inputNome = document.querySelector("[data-nome]");

detalhaCliente(id).then((dados) => {
  console.log(dados[0].cpf);
  inputCpf.value = dados[0].cpf;
  inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector("[data-form]");

const msgSucesso = (msg) => {
  const linha = document.createElement("tr");

  const conteudoLinha = ` 
   <div class='alert alert-success' role='alert'>${msg}</div>
      `;

  linha.innerHTML = conteudoLinha;
  return linha;
};
const msgError = (msg) => {
  const linha = document.createElement("tr");

  const conteudoLinha = ` 
   <div class='alert alert-warning' role='alert'>${msg}</div>
      `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

formEdicao.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validaCpf(inputCpf.value)) {
    alert("Cpf não existe");
    return;
  }
  editaCliente(id, inputCpf.value, inputNome.value).then((response) => {
    if (response.status === 200) {
      formEdicao.appendChild(msgSucesso("Cliente editado com sucesso!"));
    } else {
      formEdicao.appendChild(msgError("Erro ao editar Cliente!"));
    }
  });
});
