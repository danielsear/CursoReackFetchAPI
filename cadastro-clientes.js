const formCadastroCliente = document.querySelector("[data-form]");

formCadastroCliente.addEventListener("submit", (event) => {
  event.preventDefault();
  const campo = event.target;
  const nome = campo.querySelector("[data-nome]");
  const cpf = campo.querySelector("[data-cpf]");
  CadastrarClientes(nome.value, cpf.value);
});
