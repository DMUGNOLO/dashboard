import React from 'react';
import '../../../../app.css';
import AllRutinesCards from './AllRutinesCards';

export default function AllRutinesContainer(){
    return(
        <div className="d-flex flex-row">
            <AllRutinesCards />
        </div>
    );
}