const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('produtoId');

fetch(`https://fakestoreapi.com/products/${produtoId}`)
    .then(res => res.json())
    .then(produto => {
        const detalhesProdutoElement = document.getElementById('detalhesProduto');
        detalhesProdutoElement.innerHTML = `
        <h1>${produto.title}</h1>
        <p>Price: R$ ${produto.price}</p>
        <p>Category: ${produto.category}</p>
        <p>Description: ${produto.description}</p>
        <img src="${produto.image}" alt="${produto.title}" style="height: 300px;">
      `;
    });
