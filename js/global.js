const logout = () => {
  localStorage.removeItem('userId');
  window.location.href = './index.html';
};

const getNome = () => {
  const id = localStorage.getItem('userId');
  if (id) {
    const username = document.getElementById('username');
    username.innerHTML = localStorage.getItem('nome');
    username.href = `/perfil.html`;
    $('#loginLink').addClass('d-none');
    $('#usernameLi').removeClass('d-none');
  } else {
    $('#pedidosLink').addClass('d-none');
    $('#footerPerfil').addClass('d-none');
    $('#footerSair').addClass('d-none');
    $('#footerPedidos').addClass('d-none');
  }
};
getNome();
