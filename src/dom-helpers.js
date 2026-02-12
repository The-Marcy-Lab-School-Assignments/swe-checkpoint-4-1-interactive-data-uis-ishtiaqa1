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

const pDetails = document.querySelector('#product-details');

export const renderProductDetails = (product) => {
    pDetails.classList.remove('hidden');
    pDetails.innerHTML = '';
    const title = document.createElement('h3');
    const thumbnail = document.createElement('img');
    const price = document.createElement('p');
    const description = document.createElement('p');
    title.textContent = product.title;
    thumbnail.src = product.thumbnail;
    thumbnail.alt = product.title;
    price.textContent = product.price;
    description.textContent = product.description;
    pDetails.appendChild(title);
    pDetails.appendChild(thumbnail);
    pDetails.appendChild(price);
    pDetails.appendChild(description);
};
