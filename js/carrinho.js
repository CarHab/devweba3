$('#cartao').click(function () {
  $('#cartao-info').removeClass('d-none');
  $('#cartao-info').addClass('d-flex');
});

$('#boleto').click(function () {
  $('#cartao-info').removeClass('d-flex');
  $('#cartao-info').addClass('d-none');
});

const getIds = () => {
  const ids = [];
  Object.keys(localStorage).forEach((item) => {
    if (item.startsWith('carrinho_')) {
      ids.push(Number(localStorage.getItem(`${item}`)));
    }
  });
  return ids;
};
const ids = getIds();

const getProds = () => {
  const prodsCarrinho = [];
  ids.forEach((id) => {
    prods.forEach((prod) => {
      if (prod.id === id) prodsCarrinho.push(prod);
    });
  });
  return prodsCarrinho;
};

const prodsCarrinho = getProds();

const carrinhoItems = document.getElementById('carrinho-items');
const showCarrinho = (array) => {
  carrinhoItems.innerHTML = '';
  array.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('row');
    cartItem.classList.add('d-flex');
    cartItem.classList.add('align-items-center');
    cartItem.classList.add('bg-light');
    cartItem.classList.add('shadow');
    cartItem.classList.add('p-3');
    cartItem.classList.add('pl-4');
    cartItem.classList.add('mb-3');
    cartItem.classList.add('item');
    cartItem.id = item.id;
    const elem = `<img class="carrinho-thumb" src="./img/${item.foto}" alt="">
                  <h5 class="ml-4">${item.nome}</h5>
                  <h6 class="text-muted font-weight-light ml-auto">R$ ${item.preco}</h6>
                  <a href=""><i class="fas fa-trash-alt pl-3 text-danger mb-2" value=${item.id}></i></a>`;

    cartItem.innerHTML = elem.trim();
    carrinhoItems.appendChild(cartItem);
  });
};

showCarrinho(prodsCarrinho);

const getTotal = () => {
  let total = 0;
  prodsCarrinho.forEach((item) => (total += Number(item.preco)));
  document.getElementById('subtotal').innerHTML = total
    .toFixed(2)
    .toString()
    .replace('.', ',');
  document.getElementById('total').innerHTML = `R$ ${total
    .toFixed(2)
    .toString()
    .replace('.', ',')}`;
};
getTotal();

$('i').click(function () {
  const removed = $(this).closest('div').attr('id');
  localStorage.removeItem(`carrinho_prodId${removed}`);
});

const input = document.getElementById("cupom-form");
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("cupomBtn").click();
  }
});

const handleCupom = (event) => {
  const formCupom = document.getElementById('cupom-form').value;
  const cupomArr = cupons.filter((item) => item.codigo === formCupom);

  if (cupomArr.length > 0) {
    $('#cupom-erro').addClass('d-none');
    const descontoValue = cupomArr[0].desconto;
    const subtotal = document.getElementById('subtotal');
    const desconto = document.getElementById('desconto');
    const total = document.getElementById('total');

    let descontoNum =
      Number(subtotal.innerHTML.replace(',', '.')) * descontoValue;
    descontoNum = descontoNum.toFixed(2);

    desconto.innerHTML = `- ${descontoNum.toString().replace('.', ',')}`;

    let totalNum = total.innerHTML.split(' ')[1];

    totalNum = Number(totalNum.replace(',', '.'));

    totalNum =
      Number(subtotal.innerHTML.replace(',', '.')) * (1 - descontoValue);

    total.innerHTML = `R$ ${totalNum.toFixed(2).toString().replace('.', ',')}`;
  } else {
    $('#cupom-erro').removeClass('d-none');
  }
};
