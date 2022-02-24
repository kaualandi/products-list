function removeSelectedProducts(setSelectedProducts) {
    setSelectedProducts([]);
    localStorage.removeItem('selectedProducts');
}
export default removeSelectedProducts;