import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from '../AddItemButton/AddItemButton';
import './ItemQuantitySelector.css'

export const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = React.useState(1);

    const handleAddProduct = () => {
        setQuantity(quantity + 1);
    };
    const handleSubstractProduct = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        };
    };
    const handleReset = () => {
        setQuantity(1);
    }

    return (
        <div>
            <div className="quantityStyleContainer">
                <Button variant="success" size="sm" onClick={handleAddProduct}>+</Button>
                <input className='inputStyle' type="number" value={quantity} disabled />
                <Button variant="success" size="sm" onClick={handleSubstractProduct}>-</Button>
            </div>
            <div className="addButtonStyle">
                <AddItemButton quantity={quantity} handleReset={handleReset} />
            </div>

        </div>
    );
};