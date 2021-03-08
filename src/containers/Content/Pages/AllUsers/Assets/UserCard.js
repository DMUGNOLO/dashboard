import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";


export default function UserCard({title,lastName,avatar}){
    return(
        <div className="card-body col-5">
            <div className="text-center">
                { 
                    <img className="img-fluid img-thumbnail" src={avatar} width="425"/>
                }
            </div>
            
            <br />
            <div>
                <h2 className="font-weight-bold text-dark"> {title} </h2> 
                <span> {lastName} </span> 
            </div>
            <br />

        </div>
    );
}