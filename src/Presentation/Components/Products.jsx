import React, { useState, useEffect } from 'react';
import Loading from './Loading';

import productsList from '../../Application/productsList';
import saveSelectedProducts from '../../Application/setSelectedProducts';

import '../Styles/Products.css';

function Products({ selectedProducts, setSelectedProducts }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        productsList(setProducts, setSelectedProducts, setLoading, setError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleSelectItem(product) {
        if (selectedProducts) {
            const value = selectedProducts.find(item => item.id === product.id);
            if (value) {
                const newSelectedProducts = selectedProducts.filter(item => item.id !== product.id);
                saveSelectedProducts(setSelectedProducts, newSelectedProducts);
            } else {
                const newSelectedProducts = [...selectedProducts, product];
                saveSelectedProducts(setSelectedProducts, newSelectedProducts);
            }
        } else {
            const newSelectedProducts = [product];
            saveSelectedProducts(setSelectedProducts, newSelectedProducts);
        }
    }

    if(loading) return (<div id="products-list"><Loading/></div>);

    if(error) return (
            <div id="products-list">
                <div className="alert alert-danger" role="alert">
                    Um erro aconteceu na tentativa de carregar os produtos.<br/>
                    Mais detalhes: <span className="italic">{error}</span>.
                </div>
            </div>
        );

    return (
        <div id="products-list">
            <ul>
                {products.map(product => (
                    <li className="product-item" key={product.id}>
                        <label>
                            <div className="product-checkbox">
                                <input type="checkbox" checked={selectedProducts &&
                                    selectedProducts.filter(item => item.id === product.id).length > 0
                                } onChange={() => handleSelectItem(product)} />
                                <div className='checkmark'></div>
                            </div>
                            <div className="product-details">
                                <p className='product-name'>{product.name}</p>
                                <span>{parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;