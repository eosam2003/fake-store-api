const userCardTemplate = document.querySelector("[data-product-template]");
const userCardContainer = document.querySelector("[data-product-cards-container]");
const searchInput = document.querySelector("[data-search]");

let products = [];
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  products.forEach((product) => {
    const isVisible = product.title.toLowerCase().includes(value);
    product.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const nome = card.querySelector("[data-nome]");
      const valor = card.querySelector("[data-valor]");
      const imagem = card.querySelector("[data-imagem]");
      nome.textContent = product.title;
      valor.textContent = "R$ " + product.price;
      imagem.src = product.image;
      imagem.style.width = "100%";
      imagem.style.height = "300px";
      userCardContainer.append(card);
      products.push({
        title: product.title,
        price: product.price,
        image: product.image,
        element: card,
      });
    });
  });
