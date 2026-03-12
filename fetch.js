const productsData = fetch('https://dummyjson.com/products');

const divE1 = document.querySelector(".products");

productsData
.then((data) => {
    return data.json();
})

.then((convertedData) => {
    console.log(convertedData);

    const products = convertedData.products;

    products.forEach((product) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.thumbnail}" width="150">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
        `;

        divE1.appendChild(card);

    });
})

.catch((err) => {
    console.log(err);
});