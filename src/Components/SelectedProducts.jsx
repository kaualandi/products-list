import React from "react";
import './Styles/SelectedProducts.css';
import Loading from "./Loading";

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

    return (
        <div id="selected-products-container">
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
                            <td>{product.descrição}</td>
                            <td>{parseFloat(product.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
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
                                return acc + parseFloat(product.valor);
                            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        }</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedProducts;