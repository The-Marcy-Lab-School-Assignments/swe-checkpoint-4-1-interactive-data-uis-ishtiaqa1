import { getProducts } from "./fetch-helpers";
import { renderProducts } from "./dom-helpers";

const error = document.getElementById('error-message');

getProducts()
.then((products)=>{
    if (products.data === null) {
        throw Error(products.error)
    }
    return renderProducts(products.data);
})
.catch((error) => {
    error.textContent = error;
})