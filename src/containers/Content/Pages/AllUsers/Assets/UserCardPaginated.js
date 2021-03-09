import React from 'react';
import '../../../../app.css';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function UserCardPaginated({limit,metaNav,CurrentPage}){
    const [usersPage, setUsersPage] = useState([])
    const [meta, setMeta] = useState([])
    let { page } = useParams();

    useEffect(()=>{
        fetch(page == "Previous" ? meta.previous : page == "Next" ? metaNav.next : `https://energym.herokuapp.com/api/users?page=${page}&&limit=${limit}`)
            .then(results=>results.json())
            .then(data=>{
                setUsersPage(data.data);
                setMeta(data.meta);
            })
    }, [ CurrentPage ])

    return(
        <div className="container d-flex justify-content-around flex-wrap me-auto">
        {
            usersPage.map((user)=>(
                <div className="card-body col-5">
                    <div className="text-center">
                        { 
                            <img className="img-fluid img-thumbnail" src={user.avatar} width="425"/>
                        }
                    </div>

                    <br />
                    <div>
                        <h2 className="font-weight-bold text-dark"> {user.name} </h2> 
                        <span> {user.description} </span> 
                    </div>
                    <br />
                </div>
            ))
        }
        </div>
    );
}