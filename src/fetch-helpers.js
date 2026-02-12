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

};

export const searchProducts = (query) => {

};
