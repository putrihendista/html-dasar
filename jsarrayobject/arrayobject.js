// Data produk dalam bentuk array objek
const products = [
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
    {
        name: "Pajero Sport",
        imageSrc: "../assets/image/pajero.png",
        price: "Harga",
        details: "Selengkapnya"
    },
];

// Fungsi untuk membuat elemen produk
function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImage = document.createElement("img");
    productImage.src = product.imageSrc;
    productImage.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;

    const productDetails = document.createElement("p");
    productDetails.textContent = product.details;

    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    productCard.appendChild(productDetails);

    return productCard;
}

// Menambahkan produk ke dalam halaman
const productList = document.getElementById("product-list");

products.forEach(product => {
    const productCard = createProductCard(product);
    productList.appendChild(productCard);
});