import React from "react";
import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({items}) => {
  return(
    <div className='styleCardContainer'>
      {items.map((itemProduct) => 
      (<Item key= {itemProduct.id} {...itemProduct} />))}
    </div>
  )
};

export default ItemList;

