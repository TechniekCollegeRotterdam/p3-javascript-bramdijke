const product = {
    name: 'G PRO X Superlight',
    brand: 'Logitech',
    color: 'White',
    price: '$129,99',
    stock: 'Available',
    category: 'Mouses',
    image: './img/mouse.png'
};

let output = document.querySelector('.output');
output.innerHTML = `
<img src="${product.image}" alt="${product.name}" width="200px">
<h3>${product.brand}</h3>
<h1>${product.name}</h1>
<h2>${product.price}</h2>
<p>${product.color}</p>
<p>${product.category}</p>
<p>${product.stock}</p>`;