import getProducts from '../Infrastructure/getProducts';
import getSelectedProducts from '../Application/getSelectedProducts';

async function productsList (setProducts, setSelectedProducts, setLoading, setError) {
    setLoading(true);
    setError(false);
    const products = await getProducts();
    if (products.error) {
        setError(true);
        setLoading(false);
    } else {
        setProducts(products.map(product => {
            return {
                id: product.id,
                name: product.descricao,
                price: product.valor,
                cod: product.codigo,
            };
        }));
        setLoading(false);
        getSelectedProducts(setSelectedProducts);
    }
}

export default productsList;