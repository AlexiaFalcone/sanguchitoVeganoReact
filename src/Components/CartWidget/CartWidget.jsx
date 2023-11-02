import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
const CartWidget = () => {
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#37912b", fontSize: '1rem'}} />
            <span className='NumberCart'>0</span>
        </div>
    )
}
export default CartWidget;