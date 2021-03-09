import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";
import RutineCard from './RutineCard';
import RutineCardPaginated from './RutineCardPaginated';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

export default function AllRutinesCards(){
    const [rutines, setRutines] = useState([])
    const [meta, setMeta] = useState([])
    const [CurrentPage, setCurrentPage] = useState(1);

    let limit = 2;

    useEffect(()=>{
        fetch(`https://energym.herokuapp.com/api/rutines?page=1&&limit=${limit}`)
            .then(results=>results.json())
            .then(data=>{
                setRutines(data.data);
                setMeta(data.meta);
            })
    }, [])
  
    function ChangePage(e, nro){
        setCurrentPage(nro)
    }
    
    if(document.getElementById(1 || 2 || 3 || 4)){
        CurrentPage == 1 ? document.getElementById(1).classList.add("active") : document.getElementById(1).classList.remove("active")
        CurrentPage == 2 ? document.getElementById(2).classList.add("active") : document.getElementById(2).classList.remove("active")
        CurrentPage == 3 ? document.getElementById(3).classList.add("active") : document.getElementById(3).classList.remove("active")
        CurrentPage == 4 ? document.getElementById(4).classList.add("active") : document.getElementById(4).classList.remove("active")
    }

    return(
        <div className="d-flex flex-row">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark"> All Rutines </h6>
                </div>
                <br />

                <Router>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination d-flex justify-content-center">
                            { CurrentPage == 1 ? "" :  
                            <li class="page-item"><Link to="/AllRutines/Previous" class="page-link" onClick={(e)=>ChangePage(e, CurrentPage - 1)}>Previous</Link></li>
                            }
                            <li class="page-item" id="1"><Link to="/AllRutines/1" class="page-link" onClick={(e)=>ChangePage(e, 1)}>1</Link></li>
                            <li class="page-item" id="2"><Link to="/AllRutines/2" class="page-link" onClick={(e)=>ChangePage(e, 2)}>2</Link></li>
                            <li class="page-item" id="3"><Link to="/AllRutines/3" class="page-link" onClick={(e)=>ChangePage(e, 3)}>3</Link></li>
                            <li class="page-item" id="4"><Link to="/AllRutines/4" class="page-link" onClick={(e)=>ChangePage(e, 4)}>4</Link></li>
                            { CurrentPage == 4 ? "" :  
                            <li class="page-item"><Link to="/AllRutines/Next" class="page-link" onClick={(e)=>ChangePage(e, CurrentPage + 1)}>Next</Link></li>
                            }
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/AllRutines">                    
                            <div className="container d-flex justify-content-around flex-wrap me-auto">
                            {   
                                rutines.map((rutine)=>(
                                    <RutineCard title={rutine.name} description={rutine.description} image={rutine.image} />
                                ))
                            }
                            </div>
                        </Route>

                        <Route exact path="/AllRutines/:page">                    
                            <div className="container d-flex justify-content-around flex-wrap me-auto">
                            {  
                                <RutineCardPaginated limit={limit} metaNav={meta} CurrentPage={CurrentPage}/>
                            }
                            </div>
                        </Route>

                    </Switch>
                </Router>
            </div>
        </div>
    );


}