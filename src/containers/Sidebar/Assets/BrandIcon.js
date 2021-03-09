import React from 'react';
import '../../app.css';

export default function BrandIcon(){
    return(
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <i className="fas fa-chart-line text-warning"></i>
            </div>
            <div className="sidebar-brand-text text-warning mx-3">Admin</div>
        </a>
    )
}