function getSelectedProducts (setSelectedProducts) {
    if (localStorage.getItem('selectedProducts')) {
        setSelectedProducts(JSON.parse(localStorage.getItem('selectedProducts')));
    } else {
        setSelectedProducts([]);
    }
}

export default getSelectedProducts;