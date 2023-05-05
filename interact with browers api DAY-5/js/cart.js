const addProduct = () => {
    const productField = document.getElementById('product-name')
    const product = productField.value
    productField.value = ''
    const quantityField = document.getElementById('product-quantity')
    const quantity = quantityField.value
    quantityField.value = ''
    console.log(product, quantity);
    displayProduct(product, quantity)
    console.log(product, quantity);
}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product}:${quantity}`
    productContainer.appendChild(li)
}

