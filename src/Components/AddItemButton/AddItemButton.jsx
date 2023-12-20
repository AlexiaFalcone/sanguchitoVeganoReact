import React from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

export const AddItemButton = ({label = "Agregar al carrito", quantity, handleReset}) => {
    const {itemCount, setItemCount} = React.useContext(CartContext);
    
    const handleAddToCart = () => {
        handleReset();
        return setItemCount(itemCount + quantity)
        
    }
    

    return(
        <Button onClick={handleAddToCart}> {label} </Button>
    );
};