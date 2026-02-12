import { getProductById, getProducts } from "./fetch-helpers";
import { renderProducts, renderProductDetails } from "./dom-helpers";

const error = document.querySelector('#error-message');
const pList = document.querySelector('#products-list');

getProducts()
.then((products)=>{
    if (products.data === null) {
        throw Error(products.error)
    }
    return renderProducts(products.data);
})
.catch((err) => {
    error.textContent = err;
})

pList.addEventListener('click', (event) => {
    const closest = event.target.closest('li');
    const id = closest.getAttribute('data-product-id');
    getProductById(id).then((product) => {
       if (product.data === null) {
        throw Error(product.error)
        }
        return renderProductDetails(product.data);
    })
    .catch((err) => {
        error.textContent = err;
    })

})
