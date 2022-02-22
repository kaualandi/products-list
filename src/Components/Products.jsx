import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import './Styles/Products.css';

function Products({ selectedProducts, setSelectedProducts }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/getProducts')
            .then(response => {
                if (localStorage.getItem('selectedProducts')) {
                    setSelectedProducts(JSON.parse(localStorage.getItem('selectedProducts')));
                }
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.toString());
                setLoading(false);
            });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    function handleSelectItem(product) {
        const value = selectedProducts.find(item => item.id === product.id);
        if (value) {
            const newSelectedProducts = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(newSelectedProducts);
            localStorage.setItem('selectedProducts', JSON.stringify(newSelectedProducts));
        } else {
            const newSelectedProducts = [...selectedProducts, product];
            setSelectedProducts(newSelectedProducts);
            localStorage.setItem('selectedProducts', JSON.stringify(newSelectedProducts));
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
                                <input type="checkbox" checked={
                                    selectedProducts.filter(item => item.id === product.id).length > 0
                                } onChange={() => handleSelectItem(product)} />
                                <div className='checkmark'></div>
                            </div>
                            <div className="product-details">
                                <p className='product-name'>{product.descrição}</p>
                                <span>{parseFloat(product.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;