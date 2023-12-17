import React from "react";
import { Button } from "react-bootstrap";
import {AddItemButton} from '../AddItemButton/AddItemButton';

export const ItemQuantitySelector = () => {
    const [quantity, setQuantity] = React.useState(1);

    const handleAddProduct = () =>{
        setQuantity (quantity + 1);
    };
    const handleSubstractProduct = () => {
        if (quantity > 1 ){
            setQuantity (quantity - 1);
        };
    };
    const handleReset = () => {
        setQuantity(1);
    }

    return (
        <div>
            <Button onClick={handleAddProduct}>+</Button>
            <input type="number" value={quantity} disabled />
            <Button onClick={handleSubstractProduct}>-</Button>
            <AddItemButton quantity={quantity} handleReset={handleReset}/>
        </div>
    );
};