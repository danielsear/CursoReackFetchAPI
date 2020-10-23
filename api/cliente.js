const listarClientes = () => {
  return fetch("http://localhost:4000/clientes")
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((json) => {
      // console.log(json);
      return json;
    });
};

const CadastrarClientes = (nome, cpf) => {
  //transformando o arquivo em json
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf,
  });
  return fetch("http://localhost:4000/clientes/cliente", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: json,
  }).then((response) => {
    return response.body;
  });
};

const deleteCliente = (id) => {
  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
    method: "DELETE",
  });
};
