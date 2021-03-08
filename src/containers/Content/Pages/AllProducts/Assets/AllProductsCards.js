import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import ProductCardPaginated from './ProductCardPaginated';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

export default function AllProductsCards(){
    const [products, setProducts] = useState([])
    const [meta, setMeta] = useState([])
    const [CurrentPage, setCurrentPage] = useState(1);

    let limit = 2;

    useEffect(()=>{
        fetch(`http://localhost:3001/api/products?page=1&&limit=${limit}`)
            .then(results=>results.json())
            .then(data=>{
                setProducts(data.data);
                setMeta(data.meta);
            })
    }, [])
    

    function ChangePage(e, nro){
        setCurrentPage(nro)
    }

    if(document.getElementById(5)){
        CurrentPage == 1 ? document.getElementById(1).classList.add("active") : document.getElementById(1).classList.remove("active")
        CurrentPage == 2 ? document.getElementById(2).classList.add("active") : document.getElementById(2).classList.remove("active")
        CurrentPage == 3 ? document.getElementById(3).classList.add("active") : document.getElementById(3).classList.remove("active")
        CurrentPage == 4 ? document.getElementById(4).classList.add("active") : document.getElementById(4).classList.remove("active")
        CurrentPage == 5 ? document.getElementById(5).classList.add("active") : document.getElementById(5).classList.remove("active")
        CurrentPage == 6 ? document.getElementById(6).classList.add("active") : document.getElementById(6).classList.remove("active")
    }

    return(
        <div className="d-flex flex-row">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary"> All Products </h6>
                </div>
                <br />
                <Router>

                    <nav aria-label="Page navigation example">
                        <ul class="pagination d-flex justify-content-center">
                            { CurrentPage == 1 ? "" :  
                            <li class="page-item"><Link to="/AllProducts/Previous" class="page-link" onClick={(e)=>ChangePage(e, CurrentPage - 1)}>Previous</Link></li>
                            }
                            <li class="page-item" id="1"><Link to="/AllProducts/1" class="page-link" onClick={(e)=>ChangePage(e, 1)}>1</Link></li>
                            <li class="page-item" id="2"><Link to="/AllProducts/2" class="page-link" onClick={(e)=>ChangePage(e, 2)}>2</Link></li>
                            <li class="page-item" id="3"><Link to="/AllProducts/3" class="page-link" onClick={(e)=>ChangePage(e, 3)}>3</Link></li>
                            <li class="page-item" id="4"><Link to="/AllProducts/4" class="page-link" onClick={(e)=>ChangePage(e, 4)}>4</Link></li>
                            <li class="page-item" id="5"><Link to="/AllProducts/5" class="page-link" onClick={(e)=>ChangePage(e, 5)}>5</Link></li>
                            <li class="page-item" id="6"><Link to="/AllProducts/6" class="page-link" onClick={(e)=>ChangePage(e, 6)}>6</Link></li>
                            { CurrentPage == 6 ? "" :  
                            <li class="page-item"><Link to="/AllProducts/Next" class="page-link" onClick={(e)=>ChangePage(e, CurrentPage + 1)}>Next</Link></li>
                            }
                        </ul>
                    </nav>


                    <Switch>
                        <Route exact path="/AllProducts">
                            <div className="container d-flex justify-content-around flex-wrap me-auto">
                            {   
                                products.map((product)=>(
                                    <ProductCard title={product.name} description={product.description} image={product.image} />
                                ))
                            }
                            </div>
                        </Route>

                        <Route exact path="/AllProducts/:page">
                            <div className="container d-flex justify-content-around flex-wrap me-auto">
                            {  
                                <ProductCardPaginated limit={limit} metaNav={meta} CurrentPage={CurrentPage}/>
                            }
                            </div>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}