const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get("id");

const inputCpf = document.querySelector("[data-cpf]");
const inputNome = document.querySelector("[data-nome]");

detalhaCliente(id).then((dados) => {
  console.log(dados[0].cpf);
  inputCpf.value = dados[0].cpf;
  inputNome.value = dados[0].nome;
});

const formEdicao = document.querySelector("[data-form]");

formEdicao.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validaCpf(inputCpf.value)) {
    alert("Cpf não existe");
    return;
  }
  editaCliente(id, inputCpf.value, inputNome.value);
});
