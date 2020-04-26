const homeDiv = document.querySelector('#produtos-div');
const sapato = prods.filter((item) => item.categoria === 'sapato')

const showItems = (array) => {
  homeDiv.innerHTML = '';
  array.forEach((item) => {
    const prodCard = document.createElement('div');
    prodCard.classList.add('col-12');
    prodCard.classList.add('col-sm-6');
    prodCard.classList.add('col-md-4');
    prodCard.classList.add('mb-md-4');
    prodCard.classList.add('mb-4');
    prodCard.classList.add('justify-content-center');
    prodCard.classList.add('d-flex');
    prodCard.classList.add('flex-column');
    prodCard.classList.add('item');
    const elem = `<a onclick="link(${item.id})"><img class="img-fluid shadow-sm" src="./img/${item.foto}" alt=""></a>
                  <p class="text-center">${item.nome}</p>
                  <p class="text-center">R$ ${item.preco}</p>
                  <a onclick="link(${item.id})" class="btn btn-main-color main-color brand-yellow btn-dark w-100 mb-4 mb-md-0">Detalhes</a>
                `;

    prodCard.innerHTML = elem.trim();
    homeDiv.appendChild(prodCard);
  });
};
showItems(sapato.slice(0, 6));

const handleSearch = (event) => {
  event.preventDefault();
  const query = event.target.query.value.toLowerCase();
  if (!query) {
    showItems(sapato.slice(0, 6));
    return;
  }
  const result = sapato.filter((item) =>
    item.nome.toLowerCase().includes(query)
  );
  showItems(result);
};

const link = (id) => {
  window.location.href = `./produto.html?id=${id}`;
}

const handleOrdem = (event) => {
  event.preventDefault();

  let sorted;
  switch (event.target.value) {
    case 'precoCre':
      sorted = sapato.sort((a, b) => a.preco - b.preco);
      break;
    case 'precoDecre':
      sorted = sapato.sort((a, b) => b.preco - a.preco);
      break;
    case 'nome':
      sorted = sapato.sort((a, b) => {
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
        return -1;
      });
    case 'cor':
      sorted = sapato.sort((a, b) => {
        if (a.cor.toLowerCase() > b.cor.toLowerCase()) return 1;
        return -1;
      });
  }
  showItems(sorted);
};
