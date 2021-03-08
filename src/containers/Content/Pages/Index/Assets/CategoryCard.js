import React from 'react';
import '../../../../app.css';

export default function CategoryCard({name}){
    return(
        <div className="col-lg-6 mb-2">
            <div className="card bg-info text-white shadow">
                <div className="card-body text-center">
                    <span> {name} </span>
                </div>
            </div>
        </div>
    );
}