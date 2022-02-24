import React, { useState } from 'react';
import './Styles/App.css';
import Products from './Components/Products';
import SelectedProducts from './Components/SelectedProducts';

function App() {
    const [selectedProducts, setSelectedProducts] = useState(undefined);
    
    return (
        <div className="App">
            <div className="container">
                <div className="App-header">
                    <div className="my-details">
                        <h2>Kauã Landi</h2>
                        <p>Dev frontend - <a href="https://github.com/kaualandi">github</a></p>
                    </div>
                </div>
                <div className="content">
                    <div className="content-body">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div id='all-products' className="content-header">
                                    <h1>Lista de produtos</h1>
                                    <a href="#selected-products" className="d-md-none button small">Ver selecionados</a>
                                </div>
                                <Products selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                            </div>
                            <div id='selected-products' className="col-12 col-md-6">
                                <div className="content-header">
                                    <h1>Selecionados</h1>
                                    <a href="#all-products" className="d-md-none button small">Ver todos</a>
                                </div>
                                <SelectedProducts selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="App-footer">
                <p>&copy; 2022 - Kauã Landi</p>
            </div>
        </div>
    );
}

export default App;
