import React from 'react';
import '../../../../app.css';
import AllUsersCards from './AllUsersCards';

export default function AllUsersContainer(){
    return(
        <div className="d-flex flex-row">
            <AllUsersCards />
        </div>
    );
}