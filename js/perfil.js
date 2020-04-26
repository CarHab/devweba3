(() => {
  document.getElementById('nome').value = localStorage.getItem('nome');
  document.getElementById('sobrenome').value = localStorage.getItem('sobrenome');
  document.getElementById('telefone').value = localStorage.getItem('telefone');
  document.getElementById('endereco').value = localStorage.getItem('endereco');
  document.getElementById('email').value = localStorage.getItem('email');
  document.getElementById('senha').value = localStorage.getItem('senha');
})();
