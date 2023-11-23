import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) => {
  return(
    <div>
      {items.map((itemProduct) => 
      (<Item key= {itemProduct.id} {...itemProduct} />))}
    </div>
  )
};

export default ItemList;

