const formCadastroCliente = document.querySelector("[data-form]");

formCadastroCliente.addEventListener("submit", (event) => {
  event.preventDefault();
  const campo = event.target;
  const nome = campo.querySelector("[data-nome]").value;
  const cpf = campo.querySelector("[data-cpf]").value;

  if (validaCpf(cpf)) {
    // alert("error");
    CadastrarClientes(nome, cpf);
  } else {
    alert("Cpf invalido");
  }
});
