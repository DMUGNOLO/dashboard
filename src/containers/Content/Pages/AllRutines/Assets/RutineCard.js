import React from 'react';
import '../../../../app.css';

export default function RutineCard({title,description,image}){
    return(
        <div className="card-body col-5">
            <div className="text-center">
                { 
                    <img className="img-fluid img-thumbnail" src={image} width="425"/>
                }
            </div>
            
            <br />
            <div>
                <h2 className="font-weight-bold text-dark"> {title} </h2> 
                <span> {description} </span> 
            </div>
            <br />

        </div>
    );
}