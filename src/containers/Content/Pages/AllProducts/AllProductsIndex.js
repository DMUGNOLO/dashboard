import React from 'react';
import AllProductsContainer from './Assets/AllProductsContainer';

export default function AllProducts(){
    return(
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="container">
                <AllProductsContainer />
            </div>
        </div>
    );
}