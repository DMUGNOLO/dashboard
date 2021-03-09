import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function ProductCardPaginated({limit,metaNav,CurrentPage}){
    const [productsPage, setProductsPage] = useState([])
    const [meta, setMeta] = useState([])
    let { page } = useParams();

    console.log(meta.previous)
    useEffect(()=>{
        fetch(page == "Previous" ? meta.previous : page == "Next" ? meta.next : `https://energym.herokuapp.com/api/products?page=${page}&&limit=${limit}`)
            .then(results=>results.json())
            .then(data=>{
                setProductsPage(data.data);
                setMeta(data.meta);
            })
    }, [ CurrentPage ])
    
    
    return(
        <div className="container d-flex justify-content-around flex-wrap me-auto">
        {
            productsPage.map((product)=>(
                <div className="card-body col-5">
                    <div className="text-center">
                        { 
                            <img className="img-fluid img-thumbnail" src={product.image} width="425"/>
                        }
                    </div>

                    <br />
                    <div>
                        <h2 className="font-weight-bold text-dark"> {product.name} </h2> 
                        <span> {product.description} </span> 
                    </div>
                    <br />
                </div>
            ))
        }
        </div>
    );
}