import React from 'react';
import CardsContainer from './Assets/CardsContainer';
import LastContainer from './Assets/LastContainer';
import CategoriesContainer from './Assets/CategoriesContainer';
import { useEffect, useState } from "react";
import '../../../app.css';

export default function Index(){
//---------------------------Api Products Query------------------------------//
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
            .then(results=>results.json())
            .then(data=>setProducts(data.data.reverse()))
    }, [])

    let productPrice = products.map(product=>(product.price));
    let totalProductPrice = productPrice.reduce((acumulador, valorActual)=>parseInt(acumulador) + parseInt(valorActual), 0);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

//---------------------------Api Rutines Query------------------------------//

    const [rutines, setRutines] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/api/rutines")
            .then(results=>results.json())
            .then(data=>setRutines(data.data.reverse()))
    }, [])

    let rutinesPrice = rutines.map(rutine=>(rutine.price));
    let totalRutinesPrice = rutinesPrice.reduce((acumulador, valorActual)=>parseInt(acumulador) + parseInt(valorActual), 0)

//---------------------------Api Users Query------------------------------//
    const [users, setUsers] = useState([])

        useEffect(()=>{
            fetch("http://localhost:3001/api/users")
                .then(results=>results.json())
                .then(data=>setUsers(data.data))
        }, [])

//---------------------------Render------------------------------//

    return(
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="container">
                <CardsContainer products={products} rutines={rutines} amountInProd={formatter.format(totalProductPrice)} amountInRut={formatter.format(totalRutinesPrice)} users={users}/>
                <LastContainer products={products} rutines={rutines}/>
                <CategoriesContainer />
            </div>
        </div>
    )
}
