fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => createProdutos(json))


function createProdutos(produtos) {
    var container = document.querySelector("#listaProdutos");
    for (let i = 0; i < produtos.length; i = i + 3) {
        var row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    }

    for (let j = 0; j < produtos.length; j++) {

        let produto = produtos[j];

        var listItem = document.createElement("div");
        listItem.className = "col";
        listItem.addEventListener('click', function () {
            redirecionar(produto.id);
        });


        var divTitle = document.createElement("div");
        divTitle.className = "img-name1 produto-title";
        divTitle.textContent = produto.title;

        var divPrice = document.createElement("div");
        divPrice.className = "img-name produto-price text-color";
        divPrice.textContent = "R$ " + produto.price;

        /*var divCategory = document.createElement("div");
        divCategory.className = "img-name3";
        divCategory.textContent = produto.category;

        var divDescription = document.createElement("div");
        divDescription.className = "img-name4";
        divDescription.textContent = produto.description;*/


        var image = document.createElement("img");
        image.src = produto.image;
        image.style.width = "100%";
        image.style.height = "300px";

        var rows = document.getElementsByClassName("row");

        let rowCount = Math.floor(j / 3);
        console.log(rows.length + " - " + rowCount);

        rows[rowCount].appendChild(listItem);

        listItem.append(divTitle);
        listItem.append(divPrice);
        //listItem.append(divCategory);
        //listItem.append(divDescription);
        listItem.append(image);
    };
}
function redirecionar(produtoId) {
    fetch(`https://fakestoreapi.com/products/${produtoId}`)
        .then(res => res.json())
        .then(produto => {
            const urlSearchParams = new URLSearchParams();
            urlSearchParams.set('produtoId', produto.id);
            window.location.href = "detalhes.html?" + urlSearchParams.toString();
        });
}
const form = document.querySelector("form");
const searchInput = document.querySelector("input[type='search']");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const searchTerm = searchInput.value.trim(); // Obtém o termo de pesquisa

    if (searchTerm) {
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.set('search', searchTerm);
        window.location.href = "pesquisa.html?" + urlSearchParams.toString();
    }
});











