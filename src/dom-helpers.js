const pList = document.querySelector('#products-list');
const pCount = document.querySelector('#product-count');


export const renderProducts = (products) => {
    pList.innerHTML='';
    pCount.textContent = products.length;
    products.forEach(element => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = element.thumbnail;
        img.alt = element.title;
        const h3 = document.createElement('h3');
        h3.textContent = element.title;
        const p = document.createElement('p');
        p.textContent = element.price;
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.setAttribute('data-product-id',element.id);
        pList.append(li);
    });
};


export const renderProductDetails = (product) => {

};
