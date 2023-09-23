// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('product-list');

    // Fungsi untuk mengambil data produk dari API
    function fetchProducts() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                data.forEach(product => {
                    const productCard = document.createElement('li');
                    productCard.textContent = product.nama;
                    productList.appendChild(productCard);
                    productCard.innerHTML = `
                        <img class="product-image" src="${product.image}" alt=${product.title}">
                        <h2 class="product-title">${product.title}</h2>
                        <p class="product-price">$${product.price}</p>
                    `;
                });
            })
            .catch(error => console.error('Terjadi kesalahan:', error));
    }

    // Panggil fungsi fetchProducts() saat halaman dimuat
    fetchProducts();
});
