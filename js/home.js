const homeDiv = document.querySelector('#produtos-div');

const showItems = (array) => {
  homeDiv.innerHTML = '';
  let count = 0;
  array.forEach((item) => {
    count++;
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
showItems(prods.slice(0, 6));

const link = (id) => {
  window.location.href = `./produto.html?id=${id}`;
};

const handleSearch = (event) => {
  event.preventDefault();
  const query = event.target.query.value.toLowerCase();
  if (!query) {
    showItems(prods.slice(0, 6));
    return;
  }
  const result = prods.filter((item) =>
    item.nome.toLowerCase().includes(query)
  );
  showItems(result);
};

const handleOrdem = (event) => {
  event.preventDefault();

  let sorted;
  switch (event.target.value) {
    case 'precoCre':
      sorted = prods.sort((a, b) => a.preco - b.preco);
      break;
    case 'precoDecre':
      sorted = prods.sort((a, b) => b.preco - a.preco);
      break;
    case 'nome':
      sorted = prods.sort((a, b) => {
        if (a.nome.toLowerCase() > b.nome.toLowerCase()) return 1;
        return -1;
      });
    case 'cor':
      sorted = prods.sort((a, b) => {
        if (a.cor.toLowerCase() > b.cor.toLowerCase()) return 1;
        return -1;
      });
  }
  console.log(sorted);
  showItems(sorted);
};
