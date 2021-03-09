import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function RutineCardPaginated({limit,metaNav,CurrentPage}){
    const [rutinesPage, setRutinesPage] = useState([])
    const [meta, setMeta] = useState(metaNav)
    let { page } = useParams();

    useEffect(()=>{
        fetch(page == "Previous" ? meta.previous : page == "Next" ? meta.next : `https://energym.herokuapp.com/api/rutines?page=${page}&&limit=${limit}`)
            .then(results=>results.json())
            .then(data=>{
                setRutinesPage(data.data);
                setMeta(data.meta);
            })
    }, [ CurrentPage ])

    return(
        <div className="container d-flex justify-content-around flex-wrap me-auto">
        {
            rutinesPage.map((product)=>(
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