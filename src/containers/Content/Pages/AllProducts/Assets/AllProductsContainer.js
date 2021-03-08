import React from 'react';
import '../../../../app.css';
import AllProductsCards from './AllProductsCards';

export default function AllProductsContainer(){
    return(
        <div className="d-flex flex-row">
            <AllProductsCards />
        </div>
    );
}