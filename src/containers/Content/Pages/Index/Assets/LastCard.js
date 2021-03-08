import React from 'react';
import { useEffect, useState } from "react";

import '../../../../app.css';

export default function LastCard({title,image,description,products,name}){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary"> {name} </h6>
                </div>
                <div className="card-body">
                    
                    <div className="text-center">
                        
                        { products ?
                            <img className="img-fluid img-thumbnail" src={image} width="375"/>
                            :
                            <img className="img-fluid img-thumbnail" src={image} width="250"/>
                        }
                    </div>
                    
                    <br />
                    <div>
                        <h2 className="font-weight-bold text-dark"> {title} </h2> 
                        <span>{description}</span> 
                    </div>
                </div>
            </div>
        </div>
    );
}