import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import './CartWidget.css';


const CartWidget = () => {
    const {itemCount} = React.useContext(CartContext);
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#37912b", fontSize: '1rem'}} />
            <span className='NumberCart'>{itemCount}</span>
        </div>
    )
}
export default CartWidget;