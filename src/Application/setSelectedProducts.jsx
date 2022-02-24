function setSelectedProducts(setSelectedProducts, selectedProducts) {
    setSelectedProducts(selectedProducts);
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}
export default setSelectedProducts;