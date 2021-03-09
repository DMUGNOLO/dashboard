import React from 'react';
import Cards from './Cards';
import CurrencyIcon from '../../../../../components/CurrencyIcon';
import ClipboardIcon from '../../../../../components/ClipboardIcon';
import UserIcon from '../../../../../components/UserIcon';
import UserPlusIcon from '../../../../../components/UserPlusIcon';
import '../../../../app.css';

export default function CardsContainer({products,rutines,amountInProd,amountInRut,users}){

    return(
        <div className="row">
            {
            <>
                <Cards name="Products in Data Base" data={products.length} color="primary" icon={<ClipboardIcon />} />
                <Cards name="Rutines in Data Base" data={rutines.length} color="success" icon={<ClipboardIcon />} />
                <Cards name="Users Quantity" data={users.length} color="warning" icon={<UserIcon />} />
                <Cards name="Amount in Products" data={amountInProd} color="primary" icon={<CurrencyIcon />} />
                <Cards name="Amount in Rutines" data={amountInRut} color="success" icon={<CurrencyIcon />} />
                <Cards name="New Users in a week" data="5" color="warning" icon={<UserPlusIcon />} />
            </>
            }
        </div>
    );
}   
