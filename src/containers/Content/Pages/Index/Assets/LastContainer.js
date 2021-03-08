import React from 'react';
import LastCard from './LastCard';
import '../../../../app.css';

export default function LastContainer({products,rutines}){
    return(
        <div className="row">
            <LastCard name="Last product in Data Base" products={products} image={products.length > 0 && products[0].image} title={products.length > 0 && products[0].name} description={products.length > 0 && products[0].description}/>
            <LastCard name="Last rutine in Data Base" rutines={rutines} image={rutines.length > 0 && rutines[0].image} title={rutines.length > 0 && rutines[0].name} description={rutines.length > 0 && rutines[0].description}/>            
        </div>
    );
}