const handleCadastro = (event) => {
  event.preventDefault();

  const dados = {
    nome: event.target.nome.value,
    sobrenome: event.target.sobrenome.value,
    email: event.target.email.value,
    telefone: event.target.telefone.value,
    senha: event.target.senha.value,
    confirme: event.target.confirme.value,
    endereco: event.target.endereco.value,
  };

  const errors = validarDados(dados);

  if (!errors.valid) {
    showErrors(errors);
    return false;
  }

  localStorage.setItem('userId', '9999');
  localStorage.setItem('nome', dados.nome);
  localStorage.setItem('sobrenome', dados.sobrenome);
  localStorage.setItem('email', dados.email);
  localStorage.setItem('telefone', dados.telefone);
  localStorage.setItem('endereco', dados.endereco);
  localStorage.setItem('senha', dados.senha);

  window.location.href = '/index.html';
};

const validarDados = ({
  nome,
  sobrenome,
  email,
  telefone,
  senha,
  confirme,
}) => {
  const errors = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    senha: '',
    valid: true,
  };

  if (!checkSenha(senha, confirme)) {
    errors.senha = 'Senhas não coincidem';
    errors.valid = false;
  }
  if (!nomeIsValid(nome)) {
    errors.nome = 'Nome inválido';
    errors.valid = false;
  }
  if (!sobrenomeIsValid(sobrenome)) {
    errors.sobrenome = 'Sobrenome inválido';
    errors.valid = false;
  }
  if (!emailIsValid(email)) {
    errors.email = 'Email inválido';
    errors.valid = false;
  }
  if (!telIsValid(telefone)) {
    errors.telefone = 'Telefone inválido';
    errors.valid = false;
  }

  return errors;
};

const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const nomeIsValid = (nome) => /^[A-Za-z]+$/.test(nome);
const sobrenomeIsValid = (sobrenome) => /^[A-Za-z]+$/.test(sobrenome);
const telIsValid = (tel) =>
  /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/.test(tel);

const showErrors = ({ nome, sobrenome, email, telefone, senha }) => {
  $('#nomeErro').addClass('d-none');
  $('#nome').removeClass('is-invalid');
  $('#sobrenomeErro').addClass('d-none');
  $('#sobrenome').removeClass('is-invalid');
  $('#emailErro').addClass('d-none');
  $('#email').removeClass('is-invalid');
  $('#telErro').addClass('d-none');
  $('#telefone').removeClass('is-invalid');
  $('#senhaErro').addClass('d-none');
  $('#confirme').removeClass('is-invalid');

  if (nome) {
    $('#nomeErro').text(nome);
    $('#nomeErro').removeClass('d-none');
    $('#nome').addClass('is-invalid');
  }
  if (sobrenome) {
    $('#sobrenomeErro').text(sobrenome);
    $('#sobrenomeErro').removeClass('d-none');
    $('#sobrenome').addClass('is-invalid');
  }
  if (email) {
    $('#emailErro').text(email);
    $('#emailErro').removeClass('d-none');
    $('#email').addClass('is-invalid');
  }
  if (telefone) {
    $('#telErro').text(telefone);
    $('#telErro').removeClass('d-none');
    $('#telefone').addClass('is-invalid');
  }
  if (senha) {
    $('#senhaErro').text(senha);
    $('#senhaErro').removeClass('d-none');
    $('#confirme').addClass('is-invalid');
  }
};

const checkSenha = (senha1, senha2) => senha1 === senha2;
