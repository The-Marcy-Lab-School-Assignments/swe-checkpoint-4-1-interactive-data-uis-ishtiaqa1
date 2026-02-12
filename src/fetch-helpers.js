export const fetchData = (url) => {

};

export const getProducts = () => {
    return fetch('https://dummyjson.com/products')
    .then((response) => {
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        return {
            data: data.products,
            error: null
        }
    })
    .catch((error) => {
        return {
            data: null,
            error: error
        }
    });
};

export const getProductById = (id) => {
    return fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then((data) => {
        return {
            data: data,
            error: null
        }
    })
    .catch((error) => {
        return {
            data: null,
            error: error
        }
    });
};

export const searchProducts = async (query) => {
    try {
        const f = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        if (!f.ok) {
            throw Error(`Fetch failed. ${f.status} ${f.statusText}`);
        }
        const data = await f.json();
        return {
            data: data.products,
            error: null
        }
    } catch(err) {
        return {
            data: null,
            error: err
        }
    }
};
