import React from "react";
import ItemCategory from "../ItemCategory/ItemCategory";

const ItemListCategory = ({items}) => {
  return(
    <div className='styleCardContainer'>
      {items.map((itemProduct) => 
      (<ItemCategory key= {itemProduct.id} {...itemProduct} />))}
    </div>
  )
};

export default ItemListCategory;