const handleLogin = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const senha = event.target.senha.value;
  const clienteArr = usuarios.filter((user) => user.email === email);
  const cliente = clienteArr[0];

  if (cliente) {
    localStorage.setItem('userId', cliente.id);
    localStorage.setItem('nome', cliente.nome);
    localStorage.setItem('sobrenome', cliente.sobrenome);
    localStorage.setItem('telefone', cliente.telefone);
    localStorage.setItem('endereco', cliente.endereco);
    localStorage.setItem('email', cliente.email);

    window.location.href = `./index.html`;
  } else {
    $('#erro').removeClass('d-none');
    $('#erro').addClass('d-initial');
  }
};
