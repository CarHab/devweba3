const url = window.location.href;
const prodId = url.split('=')[1];

const prod = prods.filter((item) => item.id === Number(prodId));

document.getElementById('foto').src = `./img/${prod[0].foto}`;
document.getElementById('titulo').innerHTML = prod[0].nome;
document.getElementById('cor').innerHTML = prod[0].cor;
document.getElementById('preco').innerHTML = prod[0].preco;
document.getElementById('estoque').innerHTML = prod[0].estoque;
document.getElementById('descricao').innerHTML = prod[0].descricao;

const handleClick = () => {
  event.preventDefault();
  localStorage.setItem(`carrinho_prodId${prodId}`, prodId);
  alert('Produto adicionado ao seu carrinho')
};
