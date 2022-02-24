import React from "react";
import '../Styles/SelectedProducts.css';
import Loading from "./Loading";

import removeSelectedProducts from '../../Application/removeSelectedProducts';

function SelectedProducts({ selectedProducts, setSelectedProducts }) {

    if (selectedProducts === undefined) {
        return (
            <div id="selected-products-container">
                <Loading />
            </div>
        );
    } else if (selectedProducts.length === 0) {
        return (
            <div id="selected-products-container">
                <div className="alert alert-info" role="alert">
                    Nenhum produto selecionado.
                </div>
            </div>
        );
    }

    function clearAll() {
        removeSelectedProducts(setSelectedProducts);
    }

    return (
        <div id="selected-products-container">
            <button onClick={clearAll} className="button small">Limpar</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedProducts.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{parseFloat(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="resume">
                <div className="row">
                    <div className="col-6">
                        <p>Selecionados:<br/><span>{selectedProducts.length}</span></p>
                    </div>
                    <div className="col-6">
                        <p>Preço total:<br/><span>{
                            selectedProducts.reduce((acc, product) => {
                                return acc + parseFloat(product.price);
                            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedProducts;