import React from 'react';
import CategoryCard from './CategoryCard';
import '../../../../app.css';

export default function Categories(){
    return(
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-dark">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                            <CategoryCard name="Productos"/>
                            <CategoryCard name="Rutinas"/>
                    </div>
                </div>
            </div>
        </div>
    );
}